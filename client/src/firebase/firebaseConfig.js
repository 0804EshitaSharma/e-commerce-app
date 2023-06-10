// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* Reference from https://firebase.google.com/docs/auth/web/password-auth */
const firebaseConfig = {
  apiKey: "AIzaSyBp30JUbr9eWALQVM5WdWScUb3WR8P_dnk",
  authDomain: "e-commerce-29d39.firebaseapp.com",
  projectId: "e-commerce-29d39",
  storageBucket: "e-commerce-29d39.appspot.com",
  messagingSenderId: "607205974459",
  appId: "1:607205974459:web:23bb30924cf0a61a19249e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
export {app,auth};