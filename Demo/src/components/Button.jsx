import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

function Button() {
    const counter = useContext(counterContext)
  return (
    <div>Button{counter}</div>
  )
}

export default Button