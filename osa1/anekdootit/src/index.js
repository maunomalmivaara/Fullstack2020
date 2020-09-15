import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Function that returns a random index within the dimensions of given array:
const getRandomOfArrayLength = (arr) => Math.floor(Math.random() * arr.length)

//Function that returns array of desired length filled with specified number:
const arrayFilledWithNumber = (desiredLength, number) => {
  return Array.apply(null, new Array(desiredLength)).map(Number.prototype.valueOf, number);
}

//Function that finds the index of the largest element in a given array:
const indexOfMax = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  var max = arr[0];
  var maxIndex = 0;
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }
  return maxIndex;
}

//Content component:
const Content = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <p>This anecdote has {props.points} votes.</p>
    </>
  )
}

//Button component:
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

//App component:
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initPoints)

  const handleNextClick = () => {
    //Get random index:
    const rand = getRandomOfArrayLength(anecdotes)
    //Select array element at that index:
    setSelected(rand)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const iMax = indexOfMax(points)
  const maxPoints = points[iMax]
  const anecdoteWithMostVotes = props.anecdotes[iMax]

  return (
    <div>
      <Content header='Anecdote of the Day:' text={props.anecdotes[selected]} points={points[selected]}/>
      <Button onClick={handleVoteClick} text='vote'/>
      <Button onClick={handleNextClick} text='next anecdote'/>
      <Content header='Anecdote with Most Votes:' text={anecdoteWithMostVotes} points={maxPoints}/>
    </div>
  )
}

//Array for anecdotes:
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const initPoints = arrayFilledWithNumber(anecdotes.length, 0)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)