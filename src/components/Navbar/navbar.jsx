import React, { Component } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'


const  Navbar = () => {
  return ( 
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'></img>
      <div className="desktopMenu">
        
      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />
      </button>
    </nav>
   );
}
 
export default  Navbar;