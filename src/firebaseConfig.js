// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCL2EjCwBTeeAs3OS3pMQuG-21NUqvA_Eo",
  authDomain: "wishlist-64ddf.firebaseapp.com",
  projectId: "wishlist-64ddf",
  storageBucket: "wishlist-64ddf.appspot.com",
  messagingSenderId: "816942009891",
  appId: "1:816942009891:web:e07b3aeaf0d8790fb8eb96"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export { app, googleProvider, auth };