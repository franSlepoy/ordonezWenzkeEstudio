// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3VXRDUjKF67YzIFZCjN0G1NajcWa2cs",
  authDomain: "ow-backend.firebaseapp.com",
  projectId: "ow-backend",
  storageBucket: "ow-backend.appspot.com",
  messagingSenderId: "41635764074",
  appId: "1:41635764074:web:68bfa50288eb8dffbfb713"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)

