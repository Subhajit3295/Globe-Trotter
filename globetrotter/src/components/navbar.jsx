import React from 'react';



const toggleOfcanvas = () => {
    const navOfcanvas = document.querySelector('.nav-ofcanvas');
    // const closeBtn = document.querySelector('.closebtn');
    navOfcanvas.classList.toggle("d-none");
}

export const Navbar = () => {
    return (
        <>
        <nav>
            <div className="navbar-container">
                
                <div className='company-name-container'>
                    <p className="h1 fw-bolder">GlobeTrotter</p>
                </div>
                <div className='nav-item-container justify-content-center align-items-center' >
                    <a href="#pageOne" className='nav-link fw-bold' title='Home'>Home</a>
                    <a href="s" className='nav-link' title='Tours'>Tours</a>
                    <a href="#heading-two" className='nav-link' title='Destination'>Destinations</a>
                    <a href="s" className='nav-link' title='Deals'>Deals</a>
                    <a href="s" className='nav-link' title='About us'>About us</a>
                    <a href="s" className='nav-link' title='Contact us'>Contact us</a>
                </div>
                <div className='login-signup-container'>
                    <button className='loginbtn'>Login</button>
                    <button className='signupbtn'>Sign up</button>
                </div>
                <button className='menu-btn' onClick={toggleOfcanvas}><i class='bx bx-menu-alt-right'></i></button>
            </div>
        </nav>

        <div className="nav-ofcanvas d-none">
            <button className="closebtn" onClick={toggleOfcanvas}><i class='bx bx-x'></i></button>
            <div className="ofcanvas-child">
                <a href="#pageOne" className='ofcanvas-link' onClick={toggleOfcanvas}>Home</a>
                <a href="s" className='ofcanvas-link' onClick={toggleOfcanvas}>Tours</a>
                <a href="#heading-two" className='ofcanvas-link' onClick={toggleOfcanvas}>Destinations</a>
                <a href="s" className='ofcanvas-link' onClick={toggleOfcanvas}>Deals</a>
                <a href="s" className='ofcanvas-link' onClick={toggleOfcanvas}>About us</a>
                <a href="s" className='ofcanvas-link' onClick={toggleOfcanvas}>Contact us</a>
                <a href="s" className='ofcanvas-link' onClick={toggleOfcanvas}>Log in</a>
                <a href="s"> <button className='signupbtn'>Signup</button></a>
            </div>
        </div>
        </>
    )
}