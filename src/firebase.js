import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCVhw_x5crJ-BfKzEK-SMeJXTacWxFZHMg",
  authDomain: "tienda-react-examen.firebaseapp.com",
  projectId: "tienda-react-examen",
  storageBucket: "tienda-react-examen.firebasestorage.app",
  messagingSenderId: "1020510946862",
  appId: "1:1020510946862:web:6f7e18ca3a5c715425c1bf"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
