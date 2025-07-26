import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/cards'

function App() {
  
  let mybj = {
    name: "kalu",
    age: "19+"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 '> chai aur code </h1>

    <Cards username = {mybj}  />
         
    </>
  )
}

export default App
