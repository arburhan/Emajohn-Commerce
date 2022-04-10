// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN0pQJd9typ2CnASQrpYAw7xsMGG72wWs",
    authDomain: "ema-john-commerce-fad67.firebaseapp.com",
    projectId: "ema-john-commerce-fad67",
    storageBucket: "ema-john-commerce-fad67.appspot.com",
    messagingSenderId: "970427725585",
    appId: "1:970427725585:web:16745dcc7290d0116a7eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;