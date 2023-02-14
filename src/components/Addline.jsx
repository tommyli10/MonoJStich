import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getFirestore, collection,
	addDoc, serverTimestamp,
} from 'firebase/firestore';

const Addline = (props) => {
	const [title, setTitle] = useState('');
	const [code, setCode] = useState('');
	const [author, setAuthor] = useState('');

	// this function returns true if the code being submitted is valid
	// otherwise it returns false and nothing will be uploaded to Firestore
	const checkCodeValidity = (str) => {
		try {
			!new Function(eval(str))
			return true;
		}
		catch {
			return false;
		}
	};

	// init firebase app
	initializeApp(props.config);

	// init Firestore services
	const db = getFirestore();

	// collection ref
	const colRef = collection(db, 'oneliners');

	// add code snippet to Firestore database
	const addLine = () => {
		// test code validity before submitting
		if (!checkCodeValidity(code)) {
			window.alert('Invalid code!')
			return;
		}

		addDoc(colRef, {
			title: title,
			code: code,
			author: author.length ? author : 'Unknown',
			createdAt: serverTimestamp()
		})
			.then(() => {
				// reset form after submit
				setTitle('');
				setCode('');
				setAuthor('');
			})
	};


	return (
		<div className='mt-5'>
			<h2 className='text-center mb-5'>Add a new line</h2>
			<form id='addLine' onSubmit={(e) => {
				e.preventDefault();
				addLine();
			}}>
				<label htmlFor="title">Title: &nbsp;  &nbsp; </label>
				<br />
				<input type="text" name='title' id='name' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
				<br />
				<label htmlFor="code">Code: &nbsp;  &nbsp; </label>
				<br />
				<input type="text" name='code' id='code' value={code} onChange={(e) => { setCode(e.target.value) }} required />
				<br />
				<label htmlFor="code">Author: &nbsp;  &nbsp; </label>
				<br />
				<input type="text" name='code' id='author' value={author} onChange={(e) => { setAuthor(e.target.value) }} />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Addline;