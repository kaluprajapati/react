
//this is hooks useState
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter , setcounter]  =  useState(15)


 // let counter =15
 
const  Addvalue = () => {
if (counter < 20) {
   console.log( "clicked ", counter); 
   setcounter(counter + 1)
} 
//   console.log( "clicked ", counter); 
//  setcounter(counter + 1)
}

const  removevalue = () => {
  if (counter >  0) {
    setcounter(counter - 1)
  }
 // console.log( "clicked ", counter); 
 //counter = counter + 1
 //setcounter(counter - 1)
}


  return (
    <>
      <h1> our bussines</h1>
      <h2> counter  value: {counter} </h2>
      <button
      onClick={Addvalue}
      >Add value {counter}</button>
      < br/>
      <button 
      onClick={removevalue}> remove value {counter}</button>
      <p> footer: {counter}</p>
    </>
  )
}

export default App




 