// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b516.firebaseapp.com",
  projectId: "mern-estate-5b516",
  storageBucket: "mern-estate-5b516.appspot.com",
  messagingSenderId: "1029989136558",
  appId: "1:1029989136558:web:f90793e2a3de238b15153f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
