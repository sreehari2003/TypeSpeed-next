// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-cgrYMhs9zYrb0sp5EXLmWCbwYcMwbV4",
  authDomain: "type-speed-c9b8a.firebaseapp.com",
  projectId: "type-speed-c9b8a",
  storageBucket: "type-speed-c9b8a.appspot.com",
  messagingSenderId: "991642744058",
  appId: "1:991642744058:web:d3a5ed43c8a7b20527c543",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
