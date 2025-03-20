import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZFFoFueP0qxEGWyfh-T7ryrJLZQK9cOE",
  authDomain: "makesmile-num-verification.firebaseapp.com",
  projectId: "makesmile-num-verification",
  storageBucket: "makesmile-num-verification.appspot.com",
  messagingSenderId: "585860606919",
  appId: "1:585860606919:web:f7194dfabab94d0dd287e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);