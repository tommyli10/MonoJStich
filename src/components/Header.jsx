import React from 'react';

const Header = (props) => {
    return(
        // <div className='row'>
        //     <div className='col-2'>
        //         <a href="/">MonoJStich</a>
        //     </div>
        //     <div className='col-10'>
        //         <a href="/all">See all MonoJStichs</a>
        //         <a href="/login">Sign In</a>
        //         <a href="/signup">Sign Up</a>
        //     </div>
        // </div>
        <div className='col-12'>
            <nav id="mainNavbar" className="navbar navbar-light navbar-expand-md py-0">
                <a href="/home" className="navbar-brand">MonoJStich</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/all" className="nav-link text-right px-2">See all MonoJStichs</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link text-right px-2">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup" className="nav-link text-right px-2">Sign up</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;