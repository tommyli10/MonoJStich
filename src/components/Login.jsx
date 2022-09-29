import React from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut, signInWithEmailAndPassword,
	onAuthStateChanged
} from 'firebase/auth';


const Login = (props) => {
    // init firebase app
    initializeApp(props.config);

    // init services
    const auth = getAuth();

	const login = () => {
		const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

		signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				window.location.href = 'http://localhost:3000/';
			})
			.catch((err) => {
				console.log(err.message);
			})
	};

	return (
        <div>
            <form id='login' onSubmit={(e) => {e.preventDefault(); login()}}>
                <label htmlFor="email">Email:</label>
                <input type="text" name='email' id='email' required/>
                <label htmlFor="password">Oneliner:</label>
                <input type="password" name='password' id='password' required/>

				<button>Login</button>
            </form>
        </div>
    );
}

export default Login;