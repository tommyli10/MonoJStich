import React from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut, signInWithEmailAndPassword,
	onAuthStateChanged
} from 'firebase/auth';

const Header = (props) => {
    // init firebase app
    initializeApp(props.config);

    // init services
    const auth = getAuth();

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('user signed out')
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return(
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
                <a href="/home" onClick={logout} className='border border-dark' id='logout'>Logout</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;