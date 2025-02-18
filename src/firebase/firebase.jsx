// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const apikey = process.env.REACT_APP_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyAZ4iIkEz5ceuXIctTglYW0kYLrkln5A0E",
  authDomain: "login-webpage-3ef56.firebaseapp.com",
  projectId: "login-webpage-3ef56",
  storageBucket: "login-webpage-3ef56.firebasestorage.app",
  messagingSenderId: "55897876841",
  appId: "1:55897876841:web:a6fbec9bb92021800275f8",
  measurementId: "G-WRTCP5X2GR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
