import "./Navbar.css";
import React from 'react'
import Logo from '../../assets/Logo.png'
import Button from '../UI/Button';

const Navbar = () => {
  return (
    <div>
      <div className="nav">
          <img className="nav__logo" src={Logo} alt="netflix-logo"/>
          <div className="button_cont">
            <Button variant="outlined">English</Button>
            <Button variant="contained">Sign In</Button>
          </div>
        </div>
    </div>
  )
  
}

export default Navbar