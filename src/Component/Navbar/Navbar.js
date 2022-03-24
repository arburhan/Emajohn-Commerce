import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <div className='parentDiv' >
            <a href=""> <img src={logo} alt="" /> </a>
            <div className='childDiv' >
                <span> <a href="">Order</a> </span>
                <span> <a href="">Review Order</a> </span>
                <span> <a href="">Manage Inventory</a> </span>
            </div>
        </div>
    );
};

export default Navbar;