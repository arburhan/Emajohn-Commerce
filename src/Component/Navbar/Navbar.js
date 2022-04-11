import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import Inventory from '../Inventory/Inventory';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handaleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='parentDiv' >
            <Link to="/home"> <img src={logo} alt="" /> </Link>
            <div className='childDiv' >
                <Link to='/order'>Order</Link>
                <Link to='/order-review'>Review Order</Link>
                <Link to='/manage-inventory'>Manage Inventory</Link>
                <Link to='/about'>About</Link>
                {
                    user ?
                        <button onClick={handaleSignOut} >Sign Out</button>
                        :
                        <Link to='/login'>Log In</Link>


                }
            </div>
        </div>
    );
};

export default Navbar;