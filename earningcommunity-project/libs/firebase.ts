// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCDkD8j6BG5M4MRoYGZsTELlfCsEhal2oE',
    authDomain: 'earningcommunity-9094e.firebaseapp.com',
    projectId: 'earningcommunity-9094e',
    storageBucket: 'earningcommunity-9094e.appspot.com',
    messagingSenderId: '506059018344',
    appId: '1:506059018344:web:98d69e18b800b7409a2bdd',
    measurementId: 'G-EM2WLK3PVB',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;