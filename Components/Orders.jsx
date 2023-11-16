import { Warning } from '@material-ui/icons'
import React from 'react'

const Orders = () => {
    return (
        <div className='orders'>
            <div className='orders_container'>
                <div className='orders_icon_wrapper'>
                    <Warning className='orders_icon' />
                    <p>No orders yet</p>
                </div>
            </div>
        </div>
    )
}

export default Orders