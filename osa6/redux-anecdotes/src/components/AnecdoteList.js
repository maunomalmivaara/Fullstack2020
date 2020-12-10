import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { makeMessage } from '../reducers/notificationReducer'

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
    return anecdotes.filter(a => a.content.startsWith(filter))
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    //Anecdotes filtered:
    const anecdotes = useSelector(state => filterBy(state.anecdotes, state.filter))

    const handleVoteClick = (anecdote) => {
        dispatch(vote(anecdote.id))
        //make message:
        dispatch(makeMessage(`You voted on "${anecdote.content}"`))
        //clear message after 5000 ms:
        setTimeout(() => {dispatch(makeMessage(''))}, 5000)
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