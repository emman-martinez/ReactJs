import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// ***** Con variables de entorno ***** //

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

// if (process.env.NODE_ENV === 'test') {
//     firebaseConfig.measurementId = "G-SLS0NFJT0D";
// }

// ***** Sin Variables de entorno ***** //

// const firebaseConfig = {
//     apiKey: "AIzaSyC9nknXNLhwUIwMqJCiDRpyzsQocafB7Kw",
//     authDomain: "react-app-curso-7325a.firebaseapp.com",
//     databaseURL: "https://react-app-curso-7325a.firebaseio.com",
//     projectId: "react-app-curso-7325a",
//     storageBucket: "react-app-curso-7325a.appspot.com",
//     messagingSenderId: "884865139231",
//     appId: "1:884865139231:web:31b44f8783c2048b9d4b2a"
// };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyDyr35FONM5RjrMUR85tYS0Y4PKW1rofx8",
//     authDomain: "react-app-cursotesting.firebaseapp.com",
//     databaseURL: "https://react-app-cursotesting.firebaseio.com",
//     projectId: "react-app-cursotesting",
//     storageBucket: "react-app-cursotesting.appspot.com",
//     messagingSenderId: "346140439477",
//     appId: "1:346140439477:web:70b6b5cff23148f7c51ffc",
//     measurementId: "G-SLS0NFJT0D"
// };

// if (process.env.NODE_ENV === 'test') {
//     // Testing
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     // Dev/Production
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
// }