import axios from '../interceptors/axios'
//import axios from 'axios'



// post endpoints
export const register = payload => axios.post('register', payload)
export const Postreferrals = payload => axios.post('referrals', payload)
export const login = payload => axios.post('login ', payload)
export const createOrders = payload => axios.post('orders ', payload)
export const withdraw = payload => axios.post('withdraw', payload)
export const deposit = payload => axios.post('deposit ', payload)
//patch endpoints
export const reset = payload => axios.patch('reset', payload)
//get endpoints
export const addressfunc = () => axios.get('address')
export const getTransactions = (userId) => axios.get(`transactions/${userId}`)
export const getOrders = (userId) => axios.get(`orders/${userId}`)
export const completedOrders = (userId) => axios.get(`orders/completed/${userId}`)
export const getReferrals = (userId) => axios.get(`referrals/${userId}`)