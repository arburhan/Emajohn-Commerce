import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LogIn = () => {
    return (
        <div className='form-container'>
            <div>
                <form>
                    <h2 className='form-title'>Log in</h2>
                    <div className="inputs-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Submit" />
                </form>
                <p className='login-signup'>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;