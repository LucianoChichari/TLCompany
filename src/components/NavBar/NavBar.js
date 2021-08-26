import React from 'react'
import './NavBarStyle.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
          
        <section classame="navbar">
          <Link to="/category/electronics" className="navbar-item">Electronics </Link> 
          <Link to="/category/jewelery" className="navbar-item">Jewelery </Link>
          <Link to="/category/men's%20clothing" className="navbar-item">Man's Clothing </Link>
          <Link to="/category/women's%20clothing" className="navbar-item">Women's Clothing </Link>
          <a className="navbar-item">|</a>
          <Link className="navbar-item">Contact</Link>
          <Link to="/" className="tlc-item">The Lazy Co.</Link>
          <CartWidget/>
          <hr className="separadornav"  /> 

        </section>
    )
}

export default NavBar

