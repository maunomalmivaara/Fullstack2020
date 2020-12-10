const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.data
        case 'CLEAR_NOTIFICATION':
            return ''
        default:
          return state
      }
}

export const setNotification = (message, timeInS) => {
    return dispatch => {
        //make message:
        dispatch(makeMessage(message))
        //clear message after set time:
        setTimeout(() => {
            dispatch(clearMessage())
        }, timeInS * 1000)
    }
}



const makeMessage = (message) => {
    return {
        type: 'SET_NOTIFICATION',
        data: message
    }
}

const clearMessage = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}


export default notificationReducer