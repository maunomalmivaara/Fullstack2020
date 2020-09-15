import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = good + neutral + bad
  const notEmpty = all > 0

  if (!notEmpty) {
    return (
      <div>
        No feedback given.
      </div>
    )
  }

  const avg = (true, notEmpty) ? (good - bad) / all : 0
  const pos = ((true, notEmpty) ? 100 * good / all : 0 )+ ' %'

  return (
      <div>
          <table>
            <tbody>
              <StatisticLine text='Good' value={good}/>
              <StatisticLine text='Neutral' value={neutral}/>
              <StatisticLine text='Bad' value={bad}/>
              <StatisticLine text='All' value={all}/>
              <StatisticLine text='Average' value={avg}/>
              <StatisticLine text='Positive' value={pos}/>
            </tbody>
          </table>
      </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);