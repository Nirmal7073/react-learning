import React from 'react'
import Shortcode from './Shortcode'
import { useContext } from 'react'
import { shortcodeContext } from '../context/context'

function Button() {
    const value = useContext(shortcodeContext)
  return (
   <>
    <button className='my-3' onClick={()=>value.setCount((count)=>count + 1)}>Click me</button>
    <Shortcode/>
   </>
  )
}

export default Button