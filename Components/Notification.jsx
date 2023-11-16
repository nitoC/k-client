import { NotificationImportant } from '@material-ui/icons'
import React from 'react';

const Notification = () => {
    return (
        <div className='notification'>
            <div className='notification_body'>
                <div className='notification_icon_wrapper'>
                    <NotificationImportant className='notification_icon' />
                    <p className='no_notification_text'>
                        You have no notifications at the moment
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Notification