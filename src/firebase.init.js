// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoDbYuDT-Wz3_zvaWvAUoPGHW1Z9diEG0",
  authDomain: "medihome-web-project.firebaseapp.com",
  projectId: "medihome-web-project",
  storageBucket: "medihome-web-project.firebasestorage.app",
  messagingSenderId: "338522630524",
  appId: "1:338522630524:web:b343921168107c11955cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);