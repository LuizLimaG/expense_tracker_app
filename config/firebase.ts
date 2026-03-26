// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8drRdCnQmVSS5uGhScIMFxQOz7hoz6I8",
  authDomain: "expensetracker-377e0.firebaseapp.com",
  projectId: "expensetracker-377e0",
  storageBucket: "expensetracker-377e0.firebasestorage.app",
  messagingSenderId: "567748811317",
  appId: "1:567748811317:web:5b90eae8c3ed1bff1e6f7c",
  measurementId: "G-0CTEHYGLFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),  
})

// db
export const firestore = getFirestore(app)