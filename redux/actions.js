import { login } from '../apis/api'
const USER = 'USER_DATA'
const LOG = 'LOGOUT_USER'
let message;
let rel;
const userFetch = (payload) => {
    false
    return async (dispatch) => {
        try {
            if (payload.email) {
                const res = await login(payload)
                let data = res.data ? res.data : res
                dispatch({ type: USER, payload: data })
                if (data.message) message = data.message
                rel = true
                console.log('dispatch success')

            } else {
                dispatch({ type: USER, payload: {} })
            }
            // console.log(data)
        } catch (error) {
            dispatch({ type: USER, payload: error.response })
            if (error) console.log(error.response)
        }
    }
}
const Logout = (payload) => {
    return {
        type: LOG,
        payload,
    }
}
export { message, Logout, rel, userFetch }