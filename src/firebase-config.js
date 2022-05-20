import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4pb5CWuL_KA0qTZ1AgjlkpDqV1ff234I",
  authDomain: "books-rolling-crud.firebaseapp.com",
  projectId: "books-rolling-crud",
  storageBucket: "books-rolling-crud.appspot.com",
  messagingSenderId: "647102159705",
  appId: "1:647102159705:web:f8061ff8f49edd81290a48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
