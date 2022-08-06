import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2Rks0AmUPEzBsQGKH_AYaDxNPcy6ZvFs",
  authDomain: "crud-4ed2b.firebaseapp.com",
  projectId: "crud-4ed2b",
  storageBucket: "crud-4ed2b.appspot.com",
  messagingSenderId: "580175585594",
  appId: "1:580175585594:web:71ff0b27df563affb7f003"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 