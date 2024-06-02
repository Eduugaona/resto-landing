import React from 'react'
import './Header.css'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";




const Header = () => {

const [toggleMenu, setToggleMenu] = useState(true)

function handleMenu() {
    setToggleMenu(!toggleMenu)
   console.log(toggleMenu)
}


console.log(toggleMenu)

  return (
    <>
      <nav className='navbar'>
      <div><h2>Bridge</h2></div>
        <div id='navbar-container' className={ toggleMenu ? 'active' : 'navbar-container'}>
          
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Contact</li>
          </ul>
          <div className='social-links'>
            <div>
              <FaFacebook />
              <FaInstagram/>
              <RiWhatsappFill/>
            </div> 
           <button>Book a table</button>
          </div>
        </div>
      <FiMenu className='toggle-icon' onClick={ () => handleMenu()}/>
      </nav>
    </>
  )
}

export default Header