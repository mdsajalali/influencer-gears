// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpswQ7QXfXZevhLaBylSalj-uxnvuQHD8",
  authDomain: "influencer-products.firebaseapp.com",
  projectId: "influencer-products",
  storageBucket: "influencer-products.appspot.com",
  messagingSenderId: "1065944789638",
  appId: "1:1065944789638:web:f21e14ed31112dbc499707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
