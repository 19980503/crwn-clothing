 import firebase from 'firebase/app';

 import 'firebase/firestore';
 import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyBjBp5wV_9c_cGVH3EPtgCvSKHEU-48mXQ",
    authDomain: "crwn-db-d3b97.firebaseapp.com",
    databaseURL: "https://crwn-db-d3b97.firebaseio.com",
    projectId: "crwn-db-d3b97",
    storageBucket: "crwn-db-d3b97.appspot.com",
    messagingSenderId: "225526306360",
    appId: "1:225526306360:web:5b12f915ccf3f7e238f8cd",
    measurementId: "G-RD1N6BYDPM"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;

