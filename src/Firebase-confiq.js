// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7XVULlUe8ob47KtStKvMjC0CKSuwVv54",
  authDomain: "car-doctor-ae203.firebaseapp.com",
  projectId: "car-doctor-ae203",
  storageBucket: "car-doctor-ae203.appspot.com",
  messagingSenderId: "294772663880",
  appId: "1:294772663880:web:3b2c92351c09887e5f9a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);