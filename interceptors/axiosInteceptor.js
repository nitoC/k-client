import axios from 'axios';
import { Logout } from '../redux/actions';
import store from '../redux/Store';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

// Flag to track whether token refresh is in progress
let isRefreshing = false;
let resolved = false;

// Queue for failed requests during token refresh
let failedRequests = [];

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(
    (res) => res,
    async (error) => {
        try {



            if (error.response && error.response === 400 || error.response.status > 403) {
                console.log('hey')
                return Promise.reject(error)
            }


            if (resolved && error.response && error.response.status === 401 && window.location.pathname === '/Dashboard') {

                store.Store.dispatch(Logout({}));
                isRefreshing = false
                window.location.href = '/Signin';
                return;
            }



            if (error.response && error.response.status === 401) {


                if (window.location.pathname === '/Signin') {
                    return Promise.reject(error)
                }

                console.log(isRefreshing)

                if (!isRefreshing) {


                    isRefreshing = true;
                    resolved = true;

                    let userId = localStorage.getItem('userId');
                    userId = JSON.parse(userId);

                    // Try refreshing the token

                    const refresh = await axios.post('refreshToken', { userId });

                    console.log(refresh, 'first')

                    if (refresh && refresh.status === 200) {

                        resolved = false
                        console.log(refresh)
                        localStorage.setItem('token', refresh.data.token);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${refresh.data.token}`;
                        console.log(refresh, 'second')
                        // Retry the original request
                        failedRequests.forEach((request) => request());
                        failedRequests = [];

                        console.log(6)
                        return Promise.resolve(axios(error.config));


                    } else {


                        // If token refresh fails, logout the user
                        store.Store.dispatch(Logout({}));
                        window.location.href = '/Signin';
                    }
                } else {
                    // If token refresh is already in progress, queue the request
                    return new Promise((resolve, reject) => {
                        failedRequests.push(() => resolve(axios(error.config)));
                    });
                }
            }


        } catch (error) {
            console.error(error.message, 'axios catch');
            // Handle other errors if needed
            return Promise.reject(error);
        } finally {
            isRefreshing = false;
        }
    }
);

export default axios;
