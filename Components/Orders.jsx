import { Warning } from '@material-ui/icons'
import { completedOrders } from "../apis/api";
import React, { useState, useEffect } from 'react'
import { Skeleton } from '@material-ui/lab';

const Orders = () => {

    const [orders, setorders] = useState()

    async function getOrdersHandler() {
        let userId = localStorage.getItem('userId')

        try {
            console.log('hello orders')
            console.log(userId)
            // fetch data from external API
            const res = await completedOrders(JSON.parse(userId));
            const order = res.data.payload;

            setorders(order.reverse())



        } catch (err) {
            console.log('Error getting posts', err);
            return;
        }
    }

    useEffect(() => {
        getOrdersHandler();
    }, [])
    return (
        <div className='orders'>
            <div className='orders_container'>

                {orders ?
                    orders.length > 0 ?
                        (
                            <table className="order_table" >
                                <thead>
                                    <tr>
                                        <th>Price</th>
                                        <th>Type</th>
                                        <th>Quantity</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(orders).map((order, index) => {
                                        return (

                                            <tr key={index + Math.random()}>
                                                <td>
                                                    {order.price}
                                                </td>
                                                <td className={order.type}>
                                                    {order.type}
                                                </td>
                                                <td>
                                                    {order.value}
                                                </td>
                                                <td className='order_status'>
                                                    {order.status}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )
                        :
                        (
                            <div className='empty_orders'>
                                <div className='orders_icon_wrapper'>
                                    <Warning className='orders_icon' />
                                    <p>No orders yet</p>
                                </div>
                            </div>
                        )
                    :

                    <div className='order_skeleton'>
                        <Skeleton variant='rect' width={500} height={500} animation='wave' />
                    </div>

                }
            </div>
        </div>
    )
}

export default Orders