// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT139PpVu52rYl4V0-cOE2vfqnykfX1Oc",
    authDomain: "dragon-news-auth-57d43.firebaseapp.com",
    projectId: "dragon-news-auth-57d43",
    storageBucket: "dragon-news-auth-57d43.firebasestorage.app",
    messagingSenderId: "542329195637",
    appId: "1:542329195637:web:8a8af93277f00f25373c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;