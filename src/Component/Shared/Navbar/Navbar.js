import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            
            <ul>
                <li><a href=""> <img width={200} src="../../../../images/Logo.svg" alt="" /> </a></li>
                <li><a href="">Order</a></li>
                <li><a href="">Review Order</a></li>
                <li><a href="">Manage Inventory</a></li>
            </ul>
        </div>
    );
};

export default Navbar;