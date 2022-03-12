import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-section'>
           <div className='img-section'> <img src={logo} alt="" /></div>
           <div className='nav-section'>
               <nav>
                   
                   <Link to={"/shop"}>Home</Link>
                   <Link to={"/review"}>Order Review</Link>
                   <Link to={"/inventory"}>Inventory</Link>

                   
                  
               </nav>
           </div>
        </div>
    );
};

export default Header;