import React from 'react'
import './NavBarStyle.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        
        <section classname="navbar">
          <a href="/cat1" className="navbar-item">Home </a> 
          <a href="/cat2" className="navbar-item">About </a>
          <a href="/cat3" className="navbar-item">Shop </a>
          <a href="/cat4" className="navbar-item">Contact</a>
          <a href="logo" className="tlc-item">The Lazy Co.</a>
          <CartWidget/>
          <hr className="separadornav"  /> 
          
        </section>
    
        
    )
}

export default NavBar

