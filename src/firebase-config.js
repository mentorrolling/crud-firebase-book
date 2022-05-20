import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClVttMSsT2pRxIhCQ-x7A4k4b0XaQP9v4",
  authDomain: "books-firebase-16fff.firebaseapp.com",
  projectId: "books-firebase-16fff",
  storageBucket: "books-firebase-16fff.appspot.com",
  messagingSenderId: "953939021239",
  appId: "1:953939021239:web:4bac9de034e83d4367ec32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
