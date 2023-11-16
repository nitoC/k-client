import { Button } from '@material-ui/core'
import React from 'react'

const Settings = () => {
    return (
        <div className='settings'>
            <div className='settings_container'>
                <div className='verify_email_wrapper'>
                    <p className='verify_email'>Youremail@gmail.com</p>
                    <Button variant='contained' color='primary'>
                        Verify
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Settings