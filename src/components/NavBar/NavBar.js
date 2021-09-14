import React from 'react'
import './NavBarStyle.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
          
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="tlc-item"><a class="navbar-brand" >The Lazy Co.</a></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
          <li class="nav-item">
          <Link to="/category/musica" className="navbar-item"><a class="nav-link" >Musica</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/category/perifericos" className="navbar-item"><a class="nav-link" >Perifericos</a></Link>
          </li>
          <li class="nav-item">
          <Link to="/category/cargadores" className="navbar-item"><a class="nav-link" >Cargadores </a></Link> 
          </li>
          <li class="nav-item">
          <Link to="/category/energia" className="navbar-item"><a class="nav-link" >Energia</a></Link>
          </li>
          
        </ul>
      </div>
    </nav>
    )
}


export default NavBar

