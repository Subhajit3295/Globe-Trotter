import React from 'react';

export const Navbar = () => {
    return (
        <>
        <nav>
            <div className="navbar-container">
                
                <div className='company-name-container'>
                    <p className="h1 fw-bolder">GlobeTrotter</p>
                </div>
                <div className='nav-item-container justify-content-center align-items-center' >
                    <a href="s" className='nav-link fw-bold'>Home</a>
                    <a href="s" className='nav-link'>Tours</a>
                    <a href="s" className='nav-link'>Destinations</a>
                    <a href="s" className='nav-link'>Deals</a>
                    <a href="s" className='nav-link'>About us</a>
                    <a href="s" className='nav-link'>Contact us</a>
                </div>
                <div className='login-signup-container'>
                    <button className='loginbtn'>Login</button>
                    <button className='signupbtn'>Sign up</button>
                </div>
                <i class='bx bx-menu-alt-right menu-btn'></i>
            </div>
        </nav>
        </>
    )
}