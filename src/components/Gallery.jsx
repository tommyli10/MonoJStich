import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getFirestore, collection, getDocs, onSnapshot,
	addDoc, deleteDoc, doc,
	query, where,
	orderBy, serverTimestamp,
	getDoc, updateDoc
} from 'firebase/firestore';
import Oneliner from './Oneliner.jsx';

const Gallery = (props) => {
    const [codes, setCodes] = useState();

    // init firebase app
    initializeApp(props.config);

    // init services
    const db = getFirestore();

    // collection ref
	const colRef = collection(db, 'oneliners');
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
            {codes.map((doc, index) => {
                const data = { ...doc.data(), id: doc.id };
                console.log(data)
                return <Oneliner oneliner={data} key={index}/>
            })}
        </div>
    );
};

export default Gallery;