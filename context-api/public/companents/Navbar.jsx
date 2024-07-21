import React from 'react'
import Button from './Button'

function Navbar({count}) {
  return (
    <>
    <div>Navbar</div>
    <Button count = {count} />
    </>
  )
}

export default Navbar