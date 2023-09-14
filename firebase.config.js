// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDkuPLcTTEtTKcRzdLOdIxdGS3vG1pHWIY',
    authDomain: 'portfolio-54db5.firebaseapp.com',
    projectId: 'portfolio-54db5',
    storageBucket: 'portfolio-54db5.appspot.com',
    messagingSenderId: '434571030585',
    appId: '1:434571030585:web:3ae3b8ca78d604f5481de8',
    measurementId: 'G-H9VZVT3LFP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
