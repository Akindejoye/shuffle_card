import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDH6iRE4RwjF3LQFO46r2GtW3D-Hmfsxzo",
  authDomain: "movix-auth-aaec2.firebaseapp.com",
  projectId: "movix-auth-aaec2",
  storageBucket: "movix-auth-aaec2.appspot.com",
  messagingSenderId: "1004807859771",
  appId: "1:1004807859771:web:fe579f10164720d4d1b61e",
  measurementId: "G-0DYT69PE5L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);