import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9nknXNLhwUIwMqJCiDRpyzsQocafB7Kw",
    authDomain: "react-app-curso-7325a.firebaseapp.com",
    databaseURL: "https://react-app-curso-7325a.firebaseio.com",
    projectId: "react-app-curso-7325a",
    storageBucket: "react-app-curso-7325a.appspot.com",
    messagingSenderId: "884865139231",
    appId: "1:884865139231:web:31b44f8783c2048b9d4b2a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}