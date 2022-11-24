import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC5vdEOuO2e3szk4wE63yacDf37116lPp0",
    authDomain: "authenticate-react-6a1b0.firebaseapp.com",
    projectId: "authenticate-react-6a1b0",
    storageBucket: "authenticate-react-6a1b0.appspot.com",
    messagingSenderId: "905563969477",
    appId: "1:905563969477:web:1df773e5f0ff9fd10bddac",
    measurementId: "G-GZ5FVQPV4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


