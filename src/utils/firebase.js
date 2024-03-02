// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blogo-df4d1.firebaseapp.com",
    projectId: "blogo-df4d1",
    storageBucket: "blogo-df4d1.appspot.com",
    messagingSenderId: "233174267009",
    appId: "1:233174267009:web:f5b6d377727480d0c54980"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);