
import './App.css'
import { useState } from 'react';

function App() {

  let [counter , setCounter] = useState(15)

 const addValue = () =>{

  if(counter < 20){
    counter = counter + 1
    setCounter(counter)
  } 
    
    
 }
 const removeValue = () =>{
  if(counter > 0){
    setCounter (counter - 1)
  }


}
  return (
    <>
     
      <h1>Chai aur React</h1>
      <h2>counter value {counter}</h2>
      <div className="d-flex gap-3">
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>
      </div>
      
     
    </>
  )
}

export default App
