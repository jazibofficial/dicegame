import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gameplay from './Components/Gameplay'
import Play from './Components/Play'

function App() {

  const [isGamestart,setisGamestart]= useState(false );

  const toggleGameplay=()=>{
setisGamestart((prev)=>{
  return(!prev)



})
  }


  return (
    <>
    {
      isGamestart? <Play/>: <Gameplay toggle={toggleGameplay}/>
    }
    
    </>
  )
}

export default App
