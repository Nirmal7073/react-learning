import React from 'react'

function Header({val, last}){
    return(
        <>
            <h1>I'm header {val}</h1>
            <h2>I'm header {last}</h2>
        </>
    )
}

export default Header;