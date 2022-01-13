import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCUzaZZopl799mlaFSaRWBdroCw4gQp5Lg",
    authDomain: "crud-fire2.firebaseapp.com",
    projectId: "crud-fire2",
    storageBucket: "crud-fire2.appspot.com",
    messagingSenderId: "223007871921",
    appId: "1:223007871921:web:22d7a3c7bc3ff2fe53e390"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// acceso a base de datos
const db = firebase.firestore()
    // auth permite registrar nuevos usuarios en firebase
const auth = firebase.auth();


firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsuscribe = firebase.auth().onAuthStateChanged(user => {
            unsuscribe()
            resolve(user)
        }, reject)
    })
}


export { db, auth, firebase }