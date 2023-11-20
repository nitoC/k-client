import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:5000/api/v1'

axios.interceptors.response.use(res => res, async (error) => {
    if (error.response.status === 401) {
        let userId = localStorage.getItem('userId')
        let refresh = await axios.post('refresh', { userId })
        if (refresh.status === 200) {
            localStorage.setItem('token', refresh.data.token)

            axios.defaults.headers.common['Authorization'] = `Bearer ${refresh.data.token}`

            return axios(error.config)

        }
    }
})


export default axios;