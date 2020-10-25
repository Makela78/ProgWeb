import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [MostVotes, setMostVotes] = useState(0)
  let empty = []
  anecdotes.forEach(element => {
    empty.push(0)
  });
  const [Votes, setVotes] = useState(empty)
  
  
  const handleSelected = () => {
    let random_index = Math.ceil(Math.random() * anecdotes.length)-1
    setSelected(random_index)
  }

  const handleVotes = () => {
    const copy = [...Votes]
    copy[selected] += 1
    setVotes(copy)
  
    if(copy[selected] > MostVotes){
      setMostVotes(copy[selected])
    }

  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {Votes[selected]} votes </p>
      <Button onClick={handleVotes} text='vote' /> 
      <Button onClick={handleSelected} text='next anecdote' />

      <h1>Anecdote with most votes</h1>
      <p> {anecdotes[Votes.indexOf(MostVotes)]}</p>
      <p> has {MostVotes} votes </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
