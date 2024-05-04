import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
 const [length, setLength] = useState(8);
 const [number, setNumber] = useState(false);
 const [character, setCharater] = useState(false);
 const [password, setPassword] = useState('')

 //use reference hook
 const passwordRef = useRef(null)

 const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(number) str += '0123456789';

  if(character) str += '#@!%&*-_';

  for(let i=1; i<= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  setPassword(pass);

 }, [length, number, character, setPassword])

 const copyPasswordToClip = useCallback(() => {
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0, 101)
  window.navigator.clipboard.writeText(password)
 }, [password])

 useEffect(() => passwordGenerator(), [length, number, character, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-center text-white my-3 text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClip}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          
          <div className="flex item-center gap-x-1">
            <input onChange={(e) => {
              setLength(e.target.value)
            }} type="range" min={6} max={100} value={length} className='cursor-pointer' />
            <label>Length: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input type="checkbox" defaultChecked={number} onChange={() => {
              setNumber((prev) => !prev)
            }} />
            <label>Number</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input type="checkbox" defaultChecked={character} onChange={() => {
              setCharater((prev) => !prev)
            }} />
            <label>Charcter</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
