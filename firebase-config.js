// firebase-config.js
// GANTI DENGAN KONFIGURASI FIREBASE ANDA!
const firebaseConfig = {
    apiKey: "AIzaSyDHZRHjZJkBtQLkCUzGrPZaXjCz1rimGP0",
    authDomain: "ikanhias-platform.firebaseapp.com",
    projectId: "ikanhias-platform",
    storageBucket: "ikanhias-platform.firebasestorage.app",
    messagingSenderId: "393957147326",
    appId: "1:393957147326:web:236c7c5754f31b3a7494ef"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();