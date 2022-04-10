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
                <Link to='/order'>Order</Link>
                <Link to='/order-review'>Review Order</Link>
                <Link to='/manage-inventory'>Manage Inventory</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;