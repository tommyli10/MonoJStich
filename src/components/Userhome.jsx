import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getFirestore, collection, getDocs, onSnapshot,
	addDoc, deleteDoc, doc,
	query, where,
	orderBy, serverTimestamp,
	getDoc, updateDoc
} from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut, signInWithEmailAndPassword,
	onAuthStateChanged
} from 'firebase/auth';
import Oneliner from './Oneliner.jsx';

const Userhome = (props) => {
    const [codes, setCodes] = useState();

    // init firebase app
    initializeApp(props.config);

    // init services
    const db = getFirestore();

    // collection ref
	const colRef = collection(db, 'oneliners');
    const usersRef = collection(db, 'monousers');
    const sortByTime = query(colRef, orderBy('createdAt', 'desc'))

    useEffect(() => {
            onSnapshot(sortByTime, (snapshot) => {
                setCodes(snapshot.docs);
            })
        }, []);

    if (!codes) {
        return <></>
    }

    return(
        <div className='d-flex flex-column'>
            <div className='mt-5'>
                <div className='d-flex justify-content-center mt-5'>
                    <a type='button' href='/all' className='btn-lg btn-dark mr-4 px-4 py-3'>Browse</a>
                    <a type='button' href='/addline' className='btn-lg btn-outline-secondary border border-secondary ml-4 shadow-none px-4 py-3'>Compose</a>
                </div>
            </div>

            {codes.map((doc, index) => {
                const data = { ...doc.data(), id: doc.id };
                console.log(data)
                return <Oneliner oneliner={data} key={index}/>
            })}
        </div>
    );
};

export default Userhome;