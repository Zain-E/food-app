import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjQe9WB4vCNZkY4j-PwiHw5L4EG9_8eyo",
  authDomain: "uk-foodapp-2023.firebaseapp.com",
  projectId: "uk-foodapp-2023",
  storageBucket: "uk-foodapp-2023.appspot.com",
  messagingSenderId: "351403396206",
  appId: "1:351403396206:web:2e3769f5d67632aa712a7f",
  measurementId: "G-NRE57PGKH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);