// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSP3QJra_1WtqPbnJF0lUP_TsR1TWbMmI",
  authDomain: "test-prueba1-g1.firebaseapp.com",
  projectId: "test-prueba1-g1",
  storageBucket: "test-prueba1-g1.firebasestorage.app",
  messagingSenderId: "949647790161",
  appId: "1:949647790161:web:230daa0f525ec39a75a870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;