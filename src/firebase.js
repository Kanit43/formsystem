// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Xyi1CH49HINPLj0plSiSjuNC0H4sE84",
  authDomain: "formsystem-f29da.firebaseapp.com",
  projectId: "formsystem-f29da",
  storageBucket: "formsystem-f29da.appspot.com",
  messagingSenderId: "701874771920",
  appId: "1:701874771920:web:ed607efb6681ba1f538bd5",
  measurementId: "G-RGR36P3YRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app
