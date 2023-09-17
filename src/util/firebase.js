
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: "real-eazipay.firebaseapp.com",
  projectId: "real-eazipay",
  storageBucket: "real-eazipay.appspot.com",
  messagingSenderId: "838354589305",
  appId: "1:838354589305:web:b0e1a75e11dd1cdfdfe6a8",
  measurementId: "G-TWMZ9EQVFW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
const analytics = getAnalytics(app);