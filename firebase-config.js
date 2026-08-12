// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8iQlK2LeiwUkmfzF4I-_20DnRW-33jk",
  authDomain: "pnhs-election-portal.firebaseapp.com",
  databaseURL: "https://pnhs-election-portal-default-rtdb.firebaseio.com",
  projectId: "pnhs-election-portal",
  storageBucket: "pnhs-election-portal.firebasestorage.app",
  messagingSenderId: "290654124306",
  appId: "1:290654124306:web:427f64ef9de55695a75bcb",
  measurementId: "G-TXTVT32258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Authentication & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);