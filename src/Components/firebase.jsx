// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mGKyihrWpLBDk2sGwkpUMBfETbEX9I4",
  authDomain: "foodtrust-887c3.firebaseapp.com",
  projectId: "foodtrust-887c3",
  storageBucket: "foodtrust-887c3.appspot.com",
  messagingSenderId: "444156434606",
  appId: "1:444156434606:web:0e7f1d94f084407fc1353f",
  measurementId: "G-BX37PC8LWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
