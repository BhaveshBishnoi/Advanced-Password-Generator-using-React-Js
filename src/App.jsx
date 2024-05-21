import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  

  let passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str += '1234567890'
    if (symbol) str += '!@#$%^&*()?></.,';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char) 
      
    }
console.log(pass);
    setPassword(pass)

  },[length, number, symbol])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, symbol, passwordGenerator])

  return (
    <>
    <div className='main' style={{color:'#fff' ,backgroundColor:'#3a3a3a', flexDirection:'column',display:'flex', justifyContent:'center', alignItems:'center', height:'250px', width:'700px'}}>
<h2>Password Generator</h2>
<div className='first flex'> <input type="text" placeholder='Password' value={password} readOnly/>  </div>
   <div className='flex'>
<input type="range" value={length} min={0} max={30} onChange={(e)=>setLength(e.target.value)} />
<label htmlFor="Length"> Length ({length})</label>

<input type="checkbox" name="number" defaultChecked={number} onChange={()=>{ setNumber((prev)=>!prev)}} /> <label htmlFor="number">Number</label>
<input type="checkbox" name="symbol" defaultChecked={symbol} onChange={()=>{ setSymbol((prev)=>!prev)}} /> <label htmlFor="symbol">Symbol</label>
   </div>
    </div>
    </>
  )
}

export default App
