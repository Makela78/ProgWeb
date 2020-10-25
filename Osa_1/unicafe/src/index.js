import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({ text, value }) => (
    <tr> 
      <td> {text} </td> 
      <td> {value} </td>  
    </tr> 
)

const Statistics = ({good,neutral,bad}) => {
  let all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <font size = "4">
        No feedback given
        </font>
      </div>
    )
  }
  return (
    <font size ="4">
    <table>
      <tbody>
        <StatisticLine text="good" value ={good} /> 
        <StatisticLine text="neutral" value ={neutral} /> 
        <StatisticLine text="bad" value ={bad} /> 
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={(good - bad)/all} />
        <StatisticLine text="positive" value ={(good)/all*100 +' %'} />
      </tbody>
    </table></font>
  ) 
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
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
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
