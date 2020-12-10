const initialState = ''

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.data
            // const str = action.data.toLowerCase()
            // if (str.length === 0) return state

            // console.log('state:', state)

            // const stateInLower = state.map(v => v.toLowerCase())
            // return stateInLower.filter(a => a.startsWith(str))

        default:
            return state
    }
}

export const setFilter = (str) => {
    return {
        type: 'SET_FILTER',
        data: str
    }
}

// export const setClearFilter = () => {
//     return {
//         type: 'CLEAR_FILTER'
//     }
// }

export default filterReducer