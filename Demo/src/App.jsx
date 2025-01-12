import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import { counterContext } from './context/context'
import Button from './components/Button'


function App() {

const[count , setCount] =useState(0)
useEffect(function(){
  console.log('hi')
},[])
const addNumn =()=>{
      setCount((count) =>{
          return count + 1
      })
}
const minus =()=>{
  setCount((count)=>{
    return count -1
  })
}
  return (
    <>
      <counterContext.Provider value={count}>
        <div>App{count}</div>
        <button onClick={addNumn}>Click me</button>
        <button onClick={minus}>Click me</button>
        <Button/>
        <Header val='nirmal' last='patel'/>
      </counterContext.Provider>
    </>
   
  )

}


// const h1_virtual = <h1>heloo hi</h1>
// console.log(h1_virtual);

// const h1_real = document.createElement('h1')
// h1_real.innerText='hi kese ho'
// console.dir(h1_real);



export default App