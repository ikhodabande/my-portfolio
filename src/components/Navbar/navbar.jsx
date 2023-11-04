import React, { Component, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const  Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return ( 
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'></img>
      <div className="desktopMenu">
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
       <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-30} duration={500}  className="desktopMenuListItem">About</Link>
       <Link activeClass='active' to='works' spy={true} smooth={true} offset={-30} duration={500}  className="desktopMenuListItem">Portfolio</Link>
       <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Client</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
        <img src={contactImg} alt="contact" className="desktopMenuImg" /> Contact me </button>
   
        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
      <div className="navMenu" style={{display : showMenu ? 'flex' : 'none' }}>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
       <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-30} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
       <Link activeClass='active' to='works' spy={true} smooth={true} offset={-30} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
       <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Client</Link>
       <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
      </div>
   
   
    </nav>
   );
}
 
export default  Navbar;