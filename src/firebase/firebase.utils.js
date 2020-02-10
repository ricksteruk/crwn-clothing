import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDd06JGSMXNKnuJ0MUG5qCcmePeVXi3gu0",
    authDomain: "crwn-db-1de18.firebaseapp.com",
    databaseURL: "https://crwn-db-1de18.firebaseio.com",
    projectId: "crwn-db-1de18",
    storageBucket: "crwn-db-1de18.appspot.com",
    messagingSenderId: "584919363493",
    appId: "1:584919363493:web:fc5669c150b954bf1c024c",
    measurementId: "G-9XVGTE4LPT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;