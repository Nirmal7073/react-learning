import React ,{useState}from 'react'
import { NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import Mobilemenu from './Mobilemenu'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="wrap-header-main">
            <NavLink to="/">
              <img src="./images/logo.png" alt="logo" />
            </NavLink>
            <Navbar />
            <div className="wrap-btn-main">
              <NavLink to="" className="link-btn">login</NavLink>
              <NavLink to="" className="default-btn">Get Started Free</NavLink>
            </div>
            <div className="menbar-icon" onClick={toggleMenu}>
              <span id="menubar" className="toggle-menu"><img src="images/menubar.svg" alt="" /></span>
            </div>
          </div>
        </div>
      </header>
      <Mobilemenu  className={`mobile-menu ${isOpen ? 'is-open' : ''}`} toggleMenu={toggleMenu}/>
    </>
  )
}

export default Header