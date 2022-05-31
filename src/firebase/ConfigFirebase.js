// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfKEjHWE2ze11ThpfsGNLr9OZR117cv4o",
  authDomain: "move-d66b2.firebaseapp.com",
  projectId: "move-d66b2",
  storageBucket: "move-d66b2.appspot.com",
  messagingSenderId: "37378397722",
  appId: "1:37378397722:web:50e5b7cb599e53fde7a3a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

const db = getFirestore();

export { app, google, facebook, db };