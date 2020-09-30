import './App.css';
import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div >
    <nav className = 'nav'>
        <h3 >logo</h3>
        <ul  className = 'nav-link'>
            <Link to = '/about'>
            <li >About</li>
            </Link>

            <Link to = '/shop'>
             <li>Shop</li>
            </Link>
            
        </ul>
    </nav>
    </div>
  );
}


export default Nav;