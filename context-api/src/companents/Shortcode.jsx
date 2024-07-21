import React from 'react'
import { useContext} from 'react'
import { shortcodeContext } from '../context/context'
function Shortcode() {
const value = useContext(shortcodeContext)
  return (
    <div>{value.count}</div>
  )
}

export default Shortcode