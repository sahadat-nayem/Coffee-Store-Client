// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DauM5Be4oVZ285qe05x7fQ4xBlfkPAA",
  authDomain: "coffee-store-7f8a7.firebaseapp.com",
  projectId: "coffee-store-7f8a7",
  storageBucket: "coffee-store-7f8a7.firebasestorage.app",
  messagingSenderId: "183897511275",
  appId: "1:183897511275:web:37548dd6be8ced5ec0282e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);