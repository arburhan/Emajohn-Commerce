import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <form>
                    <h2 className='form-title'>Sign up</h2>
                    <div className="inputs-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="inputs-group">
                        <label htmlFor="password">Conform Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Submit" />
                </form>
                <p className='login-signup'>
                    Already have an account? <Link className='form-link' to="/login">log in</Link>
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