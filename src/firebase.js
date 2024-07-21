import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAP-8IoWSYxNhvNAHq18yOe5S1B6nZKJQ4",
    authDomain: "task-e1b5f.firebaseapp.com",
    projectId: "task-e1b5f",
    storageBucket: "task-e1b5f.appspot.com",
    messagingSenderId: "877382835559",
    appId: "1:877382835559:web:b315dbc787c26643d323c2",
    measurementId: "G-PZGJGBVYD5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
