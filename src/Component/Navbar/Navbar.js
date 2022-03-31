import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import Inventory from '../Inventory/Inventory';

const Navbar = () => {
    return (
        <div className='parentDiv' >
            <a href=""> <img src={logo} alt="" /> </a>
            <div className='childDiv' >
                <span> <Link to='/order'>Order</Link> </span>
                <span> <Link to='/order-review'>Review Order</Link> </span>
                <span> <Link to='/manage-inventory'>Manage Inventory</Link> </span>
            </div>
        </div>
    );
};

export default Navbar;