import React from 'react';
import "./nav.css";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
                <span id="brand-name" className="fs-3 ms-3">
                    <strong className="highlight">HOST</strong>_CLOUD
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/service">Our Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="button-group me-5 mt-3">
                    <NavLink to="/login">
                        <button type="button" className="btn btn-outline-light" style={{ borderRadius: '0%', width: '90px', height: "35px" }}>
                            LOG IN
                        </button>
                    </NavLink>
                    <NavLink to="/signup">
                        <button type="button" className="btn btn-info ms-3" style={{ borderRadius: '0%', width: '90px', height: "35px" }}>
                            SIGN UP
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
