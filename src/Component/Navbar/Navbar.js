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
            <Link to="/home"> <img src={logo} alt="" /> </Link>
            <div className='childDiv' >
                <span> <Link to='/order'>Order</Link> </span>
                <span> <Link to='/order-review'>Review Order</Link> </span>
                <span> <Link to='/manage-inventory'>Manage Inventory</Link>
                </span>
                <span> <Link to='/about'>About</Link> </span>
            </div>
        </div>
    );
};

export default Navbar;