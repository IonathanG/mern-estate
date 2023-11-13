// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-54c52.firebaseapp.com",
  projectId: "mern-estate-54c52",
  storageBucket: "mern-estate-54c52.appspot.com",
  messagingSenderId: "45409907873",
  appId: "1:45409907873:web:cf4efe2fe9534df2a5ece0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
