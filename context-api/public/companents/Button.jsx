import React from 'react'
import Shortcode from './Shortcode'

function Button({count}) {
  return (
   <>
    <button>Click me</button>
    <Shortcode count={count}/>
   </>
  )
}

export default Button