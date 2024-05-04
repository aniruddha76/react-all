import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='w-full h-svh' style={{backgroundColor: color}}>
        <h1 className='text-white flex justify-center pt-10 text-5xl'>Background Changer</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => {
          setColor('red')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={() => {
          setColor('orange')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}}>orange</button>
          <button onClick={() => {
          setColor('yellow')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'yellow'}}>yellow</button>
          <button onClick={() => {
          setColor('green')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'grwwn'}}>green</button>
          <button onClick={() => {
          setColor('blue')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>blue</button>
          <button onClick={() => {
          setColor('indigo')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'indigo'}}>indigo</button>
          <button onClick={() => {
          setColor('violet')
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'violet'}}>violet</button>
        </div>
      </div>
    </>
  )
}

export default App
