import React from 'react';
import Snippet from './Snippet.jsx';
import { initializeApp } from 'firebase/app';
import {
	getFirestore, collection, getDocs, onSnapshot,
	addDoc, deleteDoc, doc,
	query, where,
	orderBy, serverTimestamp,
	getDoc, updateDoc
} from 'firebase/firestore';

const Oneliner = (props) => {   
    // init firebase app
    initializeApp(props.config);

    // init services
    const db = getFirestore();

    // delete code event
    const deleteCode = () => {
        const docRef = doc(db, 'oneliners', props.oneliner.id);
        deleteDoc(docRef)
		.then(() => {
			console.log('code deleted')
		})
    }

    // update code event
    // const updateCode = () => {

    // }

    let deleteButton = null;
    let updateButton = null;
    if (props.fromUser) {
        deleteButton = <a className='p-0 border-0 pt-2 ml-4' onClick={deleteCode}>Delete Code</a>;
        updateButton = <a className='p-0 border-0 pt-2'>Update Code</a>;
    }

    return (
        <div className='my-5'>
            <h5 className='text-center'>{props.oneliner.title}</h5>
            <Snippet code={props.oneliner.code}/>
            <div className='d-flex flex-between border-top border-dark mt-4'>
                <p className='pt-2 mb-5 flex-grow-1'>by&nbsp;&nbsp;<strong className='font-italic'>{props.oneliner.author}</strong></p>
                {updateButton}
                {deleteButton}
            </div>
        </div>
    );
};

export default Oneliner;