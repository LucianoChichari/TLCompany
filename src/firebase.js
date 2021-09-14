import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDT6EuYxaTAWgh-z4dIWxlqU5_vC2rSbo",
  authDomain: "tlcompany-firebase.firebaseapp.com",
  projectId: "tlcompany-firebase",
  storageBucket: "tlcompany-firebase.appspot.com",
  messagingSenderId: "570810455094",
  appId: "1:570810455094:web:a95511090fcbc33f3f7497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);