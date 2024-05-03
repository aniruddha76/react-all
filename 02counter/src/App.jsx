import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      alert('cannot go over 20')
    } else {
      console.log('clicked and added', counter)
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter <= 0) {
      alert('cannot go negative mate!')
    } else {
      console.log('clicked and removed', counter)
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React Practice</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>&nbsp;
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
