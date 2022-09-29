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

// it's ok to expose this config, it acts as an url to your database
const firebaseConfig = {
    apiKey: "AIzaSyD_Dn4SrqQGddzYKscHXuxxUdAuv5TpuTI",
    authDomain: "firebasics-b4ace.firebaseapp.com",
    projectId: "firebasics-b4ace",
    storageBucket: "firebasics-b4ace.appspot.com",
    messagingSenderId: "1068267291914",
    appId: "1:1068267291914:web:06c7706618928bf67726f3",
    measurementId: "G-VXH1SVPYHH"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books');

// queries
const q = query(colRef, orderBy('createdAt'));

// // get collection data
// getDocs(colRef)
// 	.then((snapshot) => {
// 		let books = [];
// 		snapshot.docs.forEach((doc) => {
// 			books.push({ ...doc.data(), id: doc.id })
// 		});
// 		console.log(books);
// 	})
// 	.catch(err => {
// 		console.log(err.message)
// 	})

// real time collection data, this is a subscription to the collection/query
const unsubCol = onSnapshot(q, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    });
    console.log(books);
});


// adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
        .then(() => {
            // reset form after submit
            addBookForm.reset();
        })

});


// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', deleteBookForm.id.value);

    deleteDoc(docRef)
        .then(() => {
            // reset id field when deleted
            deleteBookForm.reset();
        })

});


// updating a document
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', updateForm.id.value);

    updateDoc(docRef, {
        title: updateForm.title.value
    })
        .then(() => {
            updateForm.reset();
        })

});


// signing users up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((credential) => {
            // console.log('user created:', credential.user);
            signupForm.reset();
        })
        .catch((err => {
            console.log(err.message)
        }))
})

// logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // console.log('user signed out')
        })
        .catch(err => {
            console.log(err.message)
        })
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((credential) => {
            // console.log('user logged in:', credential)
        })
        .catch((err) => {
            console.log(err.message)
        })
});


// subscribing to auth changes
// when a user signs up, the user arg is the user
// same when they sign in and out
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed:', user)
});

// ubsubscribing from changes (auth & db)
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
    console.log('unsubscribing');
    unsubCol();
    unsubAuth();
});

