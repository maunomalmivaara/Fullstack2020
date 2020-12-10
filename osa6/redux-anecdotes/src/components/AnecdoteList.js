import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

//Function for implementing filter:
const filterBy = (anecdotes, filter) => {
    return anecdotes.filter(a => {
        const aLower = a.content.toLowerCase()
        const filterLower = filter.toLowerCase()
        
        return aLower.startsWith(filterLower)})
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    //Anecdotes filtered:
    const anecdotes = useSelector(state => filterBy(state.anecdotes, state.filter))

    const handleVoteClick = (anecdote) => {
        dispatch(vote(anecdote.id))
        //make message:
        dispatch(setNotification(`You voted on "${anecdote.content}"`, 5))
    }

    return(
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => handleVoteClick(anecdote)}
                />
            )}
        </div>
    )
}

export default AnecdoteList