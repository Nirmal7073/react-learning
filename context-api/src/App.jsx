import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { shortcodeContext } from './context/context'
import Navbar from './companents/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <shortcodeContext.Provider value={{count ,setCount}} >
     <Navbar count = {count} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      </shortcodeContext.Provider>
    </>
  )
}

export default App
