import React from 'react';
import { initializeApp } from 'firebase/app';
import {
	getFirestore, collection, getDocs, onSnapshot,
	addDoc, deleteDoc, doc,
	query, where,
	orderBy, serverTimestamp,
	getDoc, updateDoc
} from 'firebase/firestore';

const Addline = (props) => {
	// init firebase app
	initializeApp(props.config);

	// init services
	const db = getFirestore();

	// collection ref
	const colRef = collection(db, 'oneliners');

	// add line
	// const addLine = document.getElementById('addLine');
	const addLine = () => {
		const title = document.getElementById('name');
		const code = document.getElementById('code');
		const author = document.getElementById('author');

		// console.log(title, code, author)

		addDoc(colRef, {
			title: title.value,
			code : code.value,
			author: author.value ? author.value : 'Unknown',
			createdAt: serverTimestamp()
		})
			.then(() => {
				// reset form after submit
				title.value = '';
				code.value = '';
				author.value = '';
			})

		// window.location.href = 
	};

    return (
        <div className='mt-5'>
            <form id='addLine' onSubmit={(e) => {e.preventDefault(); addLine()}}>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' id='name' required/>
                <label htmlFor="code">Oneliner:</label>
                <input type="text" name='code' id='code' required/>
                <label htmlFor="author">Author:</label>
                <input type="text" name='author' id='author'/>

				<button>Submit</button>
            </form>
        </div>
    );
};

export default Addline;