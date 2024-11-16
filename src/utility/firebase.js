import firebase from "firebase/compat/app";

//use this link for setup
//https://firebase.google.com/docs/web/setup

import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3JI8CAJ4lCiFvknm9uHQnFhLBIhXMfk4",
  authDomain: "clone-cd1ae.firebaseapp.com",
  projectId: "clone-cd1ae",
  storageBucket: "clone-cd1ae.firebasestorage.app",
  messagingSenderId: "328819776047",
  appId: "1:328819776047:web:f48aba05905d20752144da",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
