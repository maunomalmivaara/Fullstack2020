import React from 'react'

const Notification = ({ message, style }) => {

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    const successStyle = { ...errorStyle, color: 'green' }

    const infoStyle = { ...errorStyle, color: 'blue' }

    const styleToChoose = style === 'success'
        ? successStyle
        : style === 'error'
            ? errorStyle
            : infoStyle

    if (message === null) {
        return null
    }
    return (
        <div style={styleToChoose}>
            {message}
        </div>
    )
}

export default Notification