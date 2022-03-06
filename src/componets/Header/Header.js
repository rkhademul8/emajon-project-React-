import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header-section'>
           <div className='img-section'> <img src={logo} alt="" /></div>
           <div className='nav-section'>
               <nav>
                   <a href="/home">Home</a>
                   <a href="/about">About</a>
                   <a href="/contact">Contact</a>
               </nav>
           </div>
        </div>
    );
};

export default Header;