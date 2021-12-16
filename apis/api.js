import axios from 'axios'

export const register= payload=> axios.post('https://keytrade.herokuapp.com/register',payload)
export const login= payload=> axios.post('https://keytrade.herokuapp.com/login ',payload)
export const forgotPassword= payload=> axios.post('https://keytrade.herokuapp.com/forgotPassword ',payload)
export const deposit= payload=> axios.patch('https://keytrade.herokuapp.com/deposit ',payload)
export const reset= payload=> axios.patch('https://keytrade.herokuapp.com/reset',payload)
export const withdraw= payload=> axios.patch('https://keytrade.herokuapp.com/withdraw',payload)
export const addressfunc= payload=> axios.get('https://keytrade.herokuapp.com/address')