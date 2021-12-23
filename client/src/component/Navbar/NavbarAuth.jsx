import React from 'react'
import { Link  } from 'react-router-dom'
import { useNavigate } from 'react-router'

export const NavbarAuth = () => {

    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="" onClick={logout}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
