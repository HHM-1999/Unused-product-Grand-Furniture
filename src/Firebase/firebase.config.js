// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMoVMmDQ3q4IaQ6WimgcW0zQupPMajD70",
    authDomain: "grand-furniture-fe565.firebaseapp.com",
    projectId: "grand-furniture-fe565",
    storageBucket: "grand-furniture-fe565.appspot.com",
    messagingSenderId: "704462714487",
    appId: "1:704462714487:web:78c6b547ee0e0ecdedf872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;