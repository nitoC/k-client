//import axiosDefault from '../interceptors/axios'
import axios from '../interceptors/axiosInteceptor'
//import axios from 'axios'



// post endpoints
export const register = async payload => axios.post('register', payload)
export const Postreferrals = payload => axios.post('referrals', payload)
export const login = async payload => await axios.post('login ', payload)
export const createOrders = payload => axios.post('orders ', payload)
export const withdraw = (payload, signal) => axios.post('withdraw', payload, { signal })
export const deposit = (payload, signal) => axios.post('deposit ', payload, { signal })
//patch endpoints
export const reset = payload => axios.patch('reset', payload)
//get endpoints
export const addressfunc = () => axios.get('address')
export const getTransactions = (userId, signal) => axios.get(`transactions/${userId}`, { signal })
export const getOrders = (userId) => axios.get(`orders/${userId}`)
export const completedOrders = (userId) => axios.get(`orders/completed/${userId}`)
export const getReferrals = (userId) => axios.get(`referrals/${userId}`)
export const getToBtcRate = (value) => axios.get(`https://blockchain.info/tobtc?currency=USD&value=${value}`)