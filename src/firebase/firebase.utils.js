import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAG60txtj0hNKA5d6dbJ39wcbX0R8-UdjU",
    authDomain: "crown-db-83875.firebaseapp.com",
    projectId: "crown-db-83875",
    storageBucket: "crown-db-83875.appspot.com",
    messagingSenderId: "19015793230",
    appId: "1:19015793230:web:07a80bad4d48d9a88da11f",
    measurementId: "G-V8GF63FTNZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;