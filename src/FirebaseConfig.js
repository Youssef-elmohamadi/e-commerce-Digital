// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyANyOQjTCb2tV4wG9LGfU9CyOtw5HEcsdk",
  authDomain: "youssef-9fe8a.firebaseapp.com",
  databaseURL: "https://youssef-9fe8a-default-rtdb.firebaseio.com",
  projectId: "youssef-9fe8a",
  storageBucket: "youssef-9fe8a.firebasestorage.app",
  messagingSenderId: "525818985126",
  appId: "1:525818985126:web:1b557a61978447f9a81267",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Realtime Database
export const database = getDatabase(app);

//initialize auth
export const auth = getAuth(app);
export default app;
