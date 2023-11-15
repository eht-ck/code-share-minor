// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKaPHLea7k7JP_t7jg9U_ZiN4bJmYMMF4",
    authDomain: "nitj-ncc.firebaseapp.com",
    databaseURL: "https://nitj-ncc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nitj-ncc",
    storageBucket: "nitj-ncc.appspot.com",
    messagingSenderId: "324175091218",
    appId: "1:324175091218:web:9f5f9c1cd65d2fdd772acb",
    measurementId: "G-H8KEX6C1B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export default app;