import React from 'react';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signOut
} from 'firebase/auth';

const Header = (props) => {
    let logoutBtn = null;
    let home = null;

    // if user is logged in, display home and logout buttons
    if (props.user) {
        logoutBtn = <a href="/home" onClick={logout} className="nav-link text-right px-2 flex-grow" id='logout'>Logout</a>
        home = <a href="/userhome" className="nav-link text-right px-2" id='logout'>Home</a>
    }

    // init firebase app
    initializeApp(props.config);

    // init services
    const auth = getAuth();

    // this function is declared after the event call, so we can't use arrow function
    function logout() {
        console.log('click')
        signOut(auth)
            .then(() => {
                console.log('user signed out')
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className='col-12'>
            <nav id="mainNavbar" className="navbar navbar-light navbar-expand-lg py-0">
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
                            <a href="/addline" className="nav-link text-right px-2">Compose</a>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link text-right px-2">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a href="/signup" className="nav-link text-right px-2">Sign up</a>
                        </li>
                        <li>{home}</li>
                    </ul>
                    {logoutBtn}
                </div>
            </nav>
        </div>
    );
};

export default Header;