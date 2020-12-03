import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Notification = ({ message, style }) => {

    if (message === null) return null
    return <Alert id='notification' variant={style}>{message}</Alert>
    
}

export default Notification