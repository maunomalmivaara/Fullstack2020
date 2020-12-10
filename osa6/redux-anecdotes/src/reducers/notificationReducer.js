const initialNotification = ''

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.data
        default:
          return state
      }
}

export const makeMessage = (message) => {
    return {
        type: 'SET_NOTIFICATION',
        data: message
    }
}

export default notificationReducer