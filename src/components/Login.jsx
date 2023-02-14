import React from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword
} from 'firebase/auth';


const Login = (props) => {
	// if the user already logged in, redirect to user home page
	if (props.user) {
		window.location.href = 'http://localhost:3000/userhome';
	}

    // init firebase app
    initializeApp(props.config);

    // init services
    const auth = getAuth();

	const login = () => {
		const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

		signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				console.log(cred);
				props.switchUser(cred.user.uid, cred.user.Identifier);
				window.location.href = 'http://localhost:3000/userhome';
			})
			.catch((err) => {
				console.log(err.message);
			})
	};

	return (
        <div className='mt-5'>
			<h2 className='text-center mb-5'>Login</h2>
            <form id='login' onSubmit={(e) => {e.preventDefault(); login()}}>
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
				<button>Login</button>
            </form>
        </div>
    );
}

export default Login;