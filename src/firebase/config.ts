
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Define Firebase config. Values are fallback for local dev or if Vercel env vars are not set.
// You can also add these as VITE_FIREBASE_... variables in Vercel.
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCmJyoeWGLOuAuQaH5pxMRUc8hw-pfZgjA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "portfolio-6ae88.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "portfolio-6ae88",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "portfolio-6ae88.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "952739368564",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:952739368564:web:d53d2c748e14bcfaed8b21",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-RH7PSXSKW0"
};

console.log("=== FIREBASE CONFIG LOADING ===");
console.log("Successfully loaded Firebase config");
console.log("Project ID:", firebaseConfig.projectId);
console.log("Auth Domain:", firebaseConfig.authDomain);

// Check if config looks valid
if (!firebaseConfig.projectId || firebaseConfig.projectId === "your-project-id") {
  console.warn("⚠️ Firebase config appears to use placeholder values!");
}

console.log("=== INITIALIZING FIREBASE ===");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("✅ Firebase app initialized");

// Initialize Firestore
export const db = getFirestore(app);
console.log("✅ Firestore initialized");

// Initialize Firebase Auth
export const auth = getAuth(app);
console.log("✅ Firebase Auth initialized");

console.log("=== FIREBASE SETUP COMPLETE ===");

export default app;
