import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);