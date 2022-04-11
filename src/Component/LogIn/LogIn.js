import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handaleEmail = e => {
        setEmail(e.target.value);
    }
    const handalePassword = e => {
        setPassword(e.target.value)
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/home')

    }
    const handaleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handaleUserSignIn}>
                    <h2 className='form-title'>Log in</h2>
                    <div className="inputs-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handaleEmail} type="email" name="email" id="" />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handalePassword} type="password" name="password" id="" />
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>loading....</p>
                        }
                    </div>
                    <input className='form-submit' type="submit" value="Log in" />
                </form>
                <p className='login-signup'>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='hr-line'>
                    <hr /> or <hr />
                </div>
                <div className='icon-group'>
                    <button className='external-link'>Continue with google</button>
                    <button className='external-link'>Continue with facebook</button>
                    <button className='external-link'>Continue with microsoft</button>
                </div>

            </div>
        </div>
    );
};

export default LogIn;