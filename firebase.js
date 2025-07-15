// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDX8skvo9IQADXT_CV6z5ZWZWyaK9l0_3A",
  authDomain: "campusconnect-e6313.firebaseapp.com",
  projectId: "campusconnect-e6313",
  storageBucket: "campusconnect-e6313.firebasestorage.app",
  messagingSenderId: "1013252797849",
  appId: "1:1013252797849:web:1bd4dd39b020873e0f4f08",
  measurementId: "G-D1652VGHZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
