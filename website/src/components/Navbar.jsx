import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink className={(e)=>{
                        return e.isActive ? 'active' : ""
                    }} to="/">Home</NavLink> </li>
                    <li><NavLink className={(e)=>{
                        return e.isActive ? 'active' : ""
                    }} to="/about">About</NavLink> </li>
                    <li><NavLink className={(e)=>{
                        return e.isActive ? 'active' : ""
                    }} to="/blog">Blog</NavLink> </li>
                    <li><NavLink className={(e)=>{
                        return e.isActive ? 'active' : ""
                    }} to="/page">Page</NavLink> </li>
                    <li><NavLink className={(e)=>{
                        return e.isActive ? 'active' : ""
                    }} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar