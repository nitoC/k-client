import axios from 'axios'

// post endpoints
export const register= payload=> axios.post('https://keytrade.onrender.com/register',payload)
export const refer= payload=> axios.post('https://keytrade.onrender.com/referral',payload)
export const login= payload=> axios.post('https://keytrade.onrender.com/login ',payload)
export const forgotPassword= payload=> axios.post('https://keytrade.onrender.com/forgotPassword ',payload)
export const referfunc= payload=> axios.post('https://keytrade.onrender.com/get-referral',payload)
//patch endpoints
export const deposit= payload=> axios.patch('https://keytrade.onrender.com/deposit ',payload)
export const reset= payload=> axios.patch('https://keytrade.onrender.com/reset',payload)
export const withdraw= payload=> axios.patch('https://keytrade.onrender.com/withdraw',payload)
//get endpoints
export const addressfunc= ()=> axios.get('https://keytrade.onrender.com/address')