
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL-P2WWj6Me3kqYheu5wT9ID8ovICM3u0",
    authDomain: "ema-john-auth-b9595.firebaseapp.com",
    projectId: "ema-john-auth-b9595",
    storageBucket: "ema-john-auth-b9595.appspot.com",
    messagingSenderId: "345854569020",
    appId: "1:345854569020:web:8e845df85d71ff770c3139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;