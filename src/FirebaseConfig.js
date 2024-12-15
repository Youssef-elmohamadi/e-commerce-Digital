// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmUGg3PMUuDHe8xh42lTEprF3fO-cA4gA",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "youssef-9fe8a",
  databaseURL: "https://youssef-9fe8a-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Realtime Database
export const database = getDatabase(app);
