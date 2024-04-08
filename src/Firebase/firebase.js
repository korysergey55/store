import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

let firebaseConfig = {
  apiKey: process.env.REACT_APP_WEB_API_KEY,
  authDomain: 'store-c430f.firebaseapp.com',
  databaseURL: 'https://store-c430f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'store-c430f',
  storageBucket: 'store-c430f.appspot.com',
  messagingSenderId: '315502274086',
  appId: '1:315502274086:web:f720a663c7921f5d81a8e7',
  measurementId: 'G-SFR8X80VEE',
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
