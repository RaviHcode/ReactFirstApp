import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  
   const [count,setcount]=useState(0);
   function handleclick(){
    setcount(count+1);
   }
  return (
    
    <>
      <MyButton count={count} onClick={handleclick}> </MyButton>

      <MyButton count={count} onClick={handleclick}> </MyButton>
    
    </>
  )
}

export default App
