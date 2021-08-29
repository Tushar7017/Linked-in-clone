import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0bR7DR-RAYTb75ERlNPNWlKOgfbjWnGI",
    authDomain: "linkedin-clone-3a784.firebaseapp.com",
    projectId: "linkedin-clone-3a784",
    storageBucket: "linkedin-clone-3a784.appspot.com",
    messagingSenderId: "405406734486",
    appId: "1:405406734486:web:6e20357c4b5bd1b3310ab7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };