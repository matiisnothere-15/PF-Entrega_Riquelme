// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,
  authDomain: import.meta.env.VITE_authDomai,
  projectId: import.meta.env.VITE_projectid,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderid,
  appId: import.meta.env.VITE_appid,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 