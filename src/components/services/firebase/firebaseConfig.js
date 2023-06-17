import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTmcQZ1MegkujACntd12bE2uC4_1j0AXA",
  authDomain: "proyecto-final-alvarez-reactjs.firebaseapp.com",
  projectId: "proyecto-final-alvarez-reactjs",
  storageBucket: "proyecto-final-alvarez-reactjs.appspot.com",
  messagingSenderId: "1085834887294",
  appId: "1:1085834887294:web:05b9a3a2cf8d21ecea182f",
  measurementId: "G-2DMZSZ0WQX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
