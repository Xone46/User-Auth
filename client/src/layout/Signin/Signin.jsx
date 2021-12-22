import React from 'react'
import './signin.css'
import { Link } from "react-router-dom";


export const Signin = () => {
    return (
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
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-black"><Link to="/signin">Login</Link></button>
                            <button type="submit" className="btn btn-secondary"><Link to="/signup">Register</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
