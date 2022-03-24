import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWzoiHMcL-waMA-RfPwoA6IOXSy1jE8Uw",
    authDomain: "breakpoint-3d4ff.firebaseapp.com",
    projectId: "breakpoint-3d4ff",
    storageBucket: "breakpoint-3d4ff.appspot.com",
    messagingSenderId: "287379710593",
    appId: "1:287379710593:web:c5b6053158c0530bb9e380"
};

initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

//Get Database


onAuthStateChanged(auth, (user)=> {
    //console.log('User status changed,', user)
})



// export const login = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//     .then((cred)=> {
//         // console.log('User logged in', cred.user)
//     })
//     .catch(error=> console.log(error.message))
// }

// export const signUp = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//     .then(cred => 
//         {
//             localStorage.setItem('user', cred.user.uid)
            
//         })
//     .catch(error=> console.log(error.message))
// }

export const signOut = () => {
    
}