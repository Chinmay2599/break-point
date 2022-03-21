import React from 'react'
import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp, getDoc, updateDoc
} from 'firebase/firestore'

import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth'
import Auth from './Auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWzoiHMcL-waMA-RfPwoA6IOXSy1jE8Uw",
    authDomain: "breakpoint-3d4ff.firebaseapp.com",
    projectId: "breakpoint-3d4ff",
    storageBucket: "breakpoint-3d4ff.appspot.com",
    messagingSenderId: "287379710593",
    appId: "1:287379710593:web:c5b6053158c0530bb9e380"
  };

//init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const auth = getAuth()

//collection ref
const colRef = collection(db, 'users')

//queries
const q = query(colRef, orderBy('createdAt'))

//real time collection data

onSnapshot(q, (snapshot)=> {
    let users = []
    snapshot.docs.forEach(doc => {
        users.push({...doc.data(),id: doc.id})
    })
    console.log(users)
})

const addDocument=(name, projectName)=> {
    addDoc(colRef, {
        name: name,
        projectName: projectName,
        createdAt: serverTimestamp()
    })
}

const deleteDocument = (id) => {
    const docRef = doc(db, 'users', id)
    deleteDoc(docRef)
    .then(()=> {
        console.log('Deleted')
    })
}

const updateDocument = (id) => {
    const docRef = doc(db, 'users', id)
    updateDoc(docRef, {
        name: 'Sanika'
    })
}

//get a single document
const docRef = doc(db, 'users', "IPsQuJ2neTIJsPuiGdIp")

onSnapshot(docRef, (doc)=> {
    console.log(doc.data())
})

const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(cred => 
        // console.log('User created :', cred.user
        {})
    .catch(error=> console.log(error.message))
}

// const logout = () => {
//     signOut(auth)
//     .then(()=> {
//         // console.log('User signed out')
//     })
//     .catch(error => {
//         console.log(error.message)
//     })
// }

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((cred)=> {
        // console.log('User logged in', cred.user)
    })
    .catch(error=> console.log(error.message))
}

//Subscribing to auth changes
onAuthStateChanged(auth, (user)=> {
    console.log('User status changed,', user)
})

function FirebaseExample() {
  return (
    // <Inputs addDoc= {addDocument} deleteDocument= {deleteDocument} updateDocument= {updateDocument}/>
    <Auth signUp={signUp} logout={logout} login = {login}/>
  )
}


export default FirebaseExample