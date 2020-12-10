import anecdoteService from '.././services/anecdotes'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
}

const initialState = anecdotesAtStart.map(asObject)

const sorter = (arr) => {
    return arr.sort((a,b) => a.votes > b.votes ? -1 : 1)
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NEW_ANECDOTE':
            return sorter([...state, action.data])

        case 'VOTE':
            const id = action.data.id
            const anecToChange = state.find(a => a.id ===id)
            const changedAnec = {...anecToChange, votes: anecToChange.votes + 1}
            const newState = state.map(a => a.id !== id ? a : changedAnec)

            return sorter(newState)
        
        case 'INIT_ANECDOTES':
            return action.data
            
        default:
            return state
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes,
        })
    }
}

export const vote = (id) => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        const anecdoteToVote = anecdotes.find(a => a.id === id)
        const votedAnecdote = {
            ...anecdoteToVote,
            votes: anecdoteToVote.votes + 1
        }
        await anecdoteService.update(id, votedAnecdote)
        dispatch({
            type: 'VOTE',
            data: { id }
        })
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote,
        })
    }
}

export default reducer