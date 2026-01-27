// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmLli3WtGyEoyB7_-AKRpW45kus58jGMs",
  authDomain: "littlelemon-restaurant-79cd0.firebaseapp.com",
  projectId: "littlelemon-restaurant-79cd0",
  storageBucket: "littlelemon-restaurant-79cd0.firebasestorage.app",
  messagingSenderId: "689212201459",
  appId: "1:689212201459:web:69ad2896a3c963011a1a86",
  measurementId: "G-KZ19V85MB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
