import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';





export const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() 
        
      console.log(name);
    }

    return (
        <div>
            <div className='Navbar'>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br /> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-6">
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control" value="submit" />
                                </div>
                                <button type="submit" className="btn btn-black"><Link to="/signin">Login</Link></button>
                                <button type="submit" className="btn btn-secondary"><Link to="/signup">Register</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}