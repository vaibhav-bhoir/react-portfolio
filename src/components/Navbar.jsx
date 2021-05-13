import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo-white-small.jpeg';

function Navbar() {
    return (
        <>
        <div className='conatiner-fluid nav-bg'>
            <div className="row m-0">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <NavLink className="navbar-brand" to="/"><img className='logo' src={logo} alt="logo" /></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item ">
                            <NavLink activeClassName='menu-active' className="nav-link" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="nav-link" to="/project">Project</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="nav-link" to="/about">About</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="nav-link" to="/contact">Contact</NavLink>
                          </li>
                        </ul>
                        </div>
                    </nav> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
