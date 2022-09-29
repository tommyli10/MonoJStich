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
    // const [code, setCode] = useState();

    // init firebase app
    initializeApp(props.config);

    // init services
    const db = getFirestore();

    // collection ref
	const colRef = collection(db, 'oneliners');

    const oneliners = [];

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(colRef);
                // .then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        const data = { ...doc.data(), id: doc.id };
                        oneliners.push(<Oneliner oneliner={data}/>)
                    });
                    // setCode(snapshot.docs);
                // })
        }

        fetchData()
    }, []);

    // if (code === undefined) {
    //     return <>Still loading....</>
    // }

    return(
        <div className='d-flex'>
            <h1>hi</h1>
            {oneliners}
        </div>
    );
};

export default Gallery;