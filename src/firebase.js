// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDFwPnJNRmiFv2_-7difQqqRIbAvUEESo8",
  authDomain: "college-internship-2025.firebaseapp.com",
  projectId: "college-internship-2025",
  storageBucket: "college-internship-2025.appspot.com",
  messagingSenderId: "745167796565",
  appId: "1:745167796565:web:9566e7dac1ebd3d90dd7dc",
  measurementId: "G-WV3S1WBBYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
