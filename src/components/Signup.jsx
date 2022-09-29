import React from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut, signInWithEmailAndPassword,
	onAuthStateChanged
} from 'firebase/auth';


const Signup = (props) => {
    // init firebase app
    initializeApp(props.config);

    // init services
    const auth = getAuth();

    const signUp = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                window.location.href = 'http://localhost:3000/';
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className='mt-5'>
            <form id='signup' onSubmit={(e) => {e.preventDefault(); signUp()}}>
                <label htmlFor="email">Email:</label>
                <input type="text" name='email' id='email' required/>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' id='password' required/>

				<button>Sign up</button>
            </form>
        </div>
    );

}

export default Signup;