import React from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword
} from 'firebase/auth';


const Signup = (props) => {
    // if the user already logged in, redirect to user home page
	if (props.user) {
		window.location.href = 'http://localhost:3000/userhome';
	}

    // init firebase app
    initializeApp(props.config);

    // init services
    const auth = getAuth();

    const signUp = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                window.location.href = 'http://localhost:3000/userhome';
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className='mt-5'>
            <h2 className='text-center mb-5'>Sign up</h2>
            <form id='signup' onSubmit={(e) => {e.preventDefault(); signUp()}}>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="text" name='email' id='email' required/>
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" name='password' id='password' required/>
                <br />
                <br />
				<button>Sign up</button>
            </form>
        </div>
    );

}

export default Signup;