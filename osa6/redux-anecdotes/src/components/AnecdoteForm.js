import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        dispatch(createAnecdote(content))
        //make message:
        dispatch(setNotification(`Anecdote "${content}" successfully added!`, 5))
        //clear message after 5000 ms:
        // setTimeout(() => {dispatch(clearMessage())}, 5000)
    }

    return (
        <form onSubmit={addAnecdote}>
            <h2>create new</h2>
            <div>
                <input name="anecdote" />
            </div>
            <button type="submit">create</button>
        </form>
    )
}

export default AnecdoteForm