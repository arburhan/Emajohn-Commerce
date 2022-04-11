import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    // hooks
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    // handlar
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setconfirmPassword(e.target.value);
    }
    if (user) {
        navigate('/home');
    }
    const handleCreateUser = e => {
        console.log(email, password, confirmPassword);
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-title'>Sign up</h2>
                    <div className="inputs-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="1" required />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign up" />
                </form>
                <p className='login-signup'>
                    Already have an account? <Link className='form-link' to="/login">please log in</Link>
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
export default SignUp;