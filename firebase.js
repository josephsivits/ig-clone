//import * as firebase from 'firebase'
/*
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAk0bPdPtIbXc-kSAhllKluavZ1DBGEMRU",
    authDomain: "rn-instagram-clone-f84a4.firebaseapp.com",
    projectId: "rn-instagram-clone-f84a4",
    storageBucket: "rn-instagram-clone-f84a4.appspot.com",
    messagingSenderId: "656343183613",
    appId: "1:656343183613:web:71325d3da95174aa478e94",
    measurementId: "G-FZ4MX594V3"
}

!firebase.app.appId ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase

*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  projectId: "***",
  storageBucket:  "***",
  messagingSenderId:  "***",
  appId:  "***",
  measurementId:  "***",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig
