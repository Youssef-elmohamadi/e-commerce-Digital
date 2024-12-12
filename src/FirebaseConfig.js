// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmUGg3PMUuDHe8xh42lTEprF3fO-cA4gA",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "youssef-9fe8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);