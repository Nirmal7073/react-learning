import React from 'react'
import { NavLink } from 'react-router-dom'
function Mobilemenu({ className ,toggleMenu }) {
    return (
        (
            <div className={className} id="mobileMenu" onClick={toggleMenu}>
                <div className="menu-close" id="closeMenu">
                    <img src="images/close.svg" alt="clo" />
                </div>
                <ul>
                    <li><NavLink className={(e) => {
                        return e.isActive ? 'active' : ""
                    }} to="/">Home</NavLink>
                    </li>
                    <li><NavLink className={(e) => {
                        return e.isActive ? 'active' : ""
                    }} to="/blog">Blog</NavLink>
                    </li>
                    <li><NavLink className={(e) => {
                        return e.isActive ? 'active' : ""
                    }} to="/page">Page</NavLink>
                    </li>
                    <li><NavLink className={(e) => {
                        return e.isActive ? 'active' : ""
                    }} to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="wrap-btn-main">
                    <a href="" className="link-btn">login</a>
                    <a href="#" className="default-btn">Get Started Free</a>
                </div>
            </div>
        )
    )
}

export default Mobilemenu