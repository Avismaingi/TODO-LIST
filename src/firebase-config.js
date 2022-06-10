// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJqla1jqZ5yMLtfStDVdg5BeDdWhoiW50",
  authDomain: "todo-list-30364.firebaseapp.com",
  projectId: "todo-list-30364",
  storageBucket: "todo-list-30364.appspot.com",
  messagingSenderId: "1085685065385",
  appId: "1:1085685065385:web:a5afe3d1aead658a676bb8",
  measurementId: "G-5LYXPVKYK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);