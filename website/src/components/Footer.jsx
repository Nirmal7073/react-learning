import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="logo-footer">
                            <NavLink to="/">
                                <img src="./images/logo.png" alt="logo" />
                            </NavLink>
                        </div>
                        <div className="link-main">
                            <ul>
                                <li>
                                    <NavLink className={(e)=>{
                                        return e.isActive ? 'active' : ''
                                    }} to="/about" >About</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(e)=>{
                                        return e.isActive ? 'active' : ''
                                    }} to="/feature">Features</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(e)=>{
                                        return e.isActive ? 'active' : ''
                                    }} to="/work">Works</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(e)=>{
                                        return e.isActive ? 'active' : ''
                                    }} to="/support">Support</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="social-media">
                            <ul>
                                <li><a href="#"><img src="images/twit.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/face.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/insta.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/git.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>© Copyright {currentYear}, All Rights Reserved</span>
                        <ul>
                            <li><a href="#">Privacy Policy </a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer