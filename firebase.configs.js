// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "outsource-project-2d2f1.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: "outsource-project-2d2f1.appspot.com",
  messagingSenderId: "397646804191",
  appId: process.env.FIREBASE_APPID,
  measurementId: "G-LYSK8951WX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();