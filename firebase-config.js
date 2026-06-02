// firebase-config.js - VERSI 9 (MODULAR)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHZRHjZJkBtQLkCUzGrPZaXjCz1rimGP0",
    authDomain: "ikanhias-platform.firebaseapp.com",
    projectId: "ikanhias-platform",
    storageBucket: "ikanhias-platform.firebasestorage.app",
    messagingSenderId: "393957147326",
    appId: "1:393957147326:web:236c7c5754f31b3a7494ef"
};

// Inisialisasi
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export untuk digunakan di file lain
window.auth = auth;
window.db = db;
window.firebase = { auth, db };
