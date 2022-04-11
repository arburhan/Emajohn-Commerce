import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // handlar
    const handleName = e => {
        setName(e.target.value);
    }
    const handleAddress = e => {
        setAddress(e.target.value);
    }
    const handlePhone = e => {
        setPhone(e.target.value);
    }
    const handleCreateUser = e => {
        e.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }
    return (
        <div >
            <div className='form-container'>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-title'>Shipping info</h2>
                    <div className="inputs-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleName} type="text" name="name" id="1" required />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="email">Email</label>
                        <input className='text-secondary' value={user?.email} readOnly type="email" name="email" id="1" required />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhone} type="tel" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;