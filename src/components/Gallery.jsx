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

    const oneliners = [];

    useEffect(() => {
            getDocs(colRef)
                .then((snapshot) => {
                    setCodes(snapshot.docs);
                    // console.log(codes)
                })
                .catch((err) => {
                    console.log(err.message);
                })
                    // snapshot.docs.forEach((doc) => {
                    //     const data = { ...doc.data(), id: doc.id };
                    //     oneliners.push(<Oneliner oneliner={data}/>)
                    // }); 
                    // setCode(snapshot.docs);
                    // console.log(code)
        }, []);

    if (!codes) {
        return <>Loading....</>
    }

    return(
        <div className='d-flex flex-column'>
            {codes.map((doc, index) => {
                const data = { ...doc.data(), id: doc.id };
                // console.log(data)
                return <Oneliner oneliner={data} key={index}/>
            })}
        </div>
    );
};

export default Gallery;