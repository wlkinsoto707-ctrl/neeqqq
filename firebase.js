import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase, ref, update, onValue } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAD4XGJhBams4YGifQDHQ7IUOocl5aSz88",
  authDomain: "sitioweb-2026.firebaseapp.com",
  databaseURL: "https://sitioweb-2026-default-rtdb.firebaseio.com",
  projectId: "sitioweb-2026",
  storageBucket: "sitioweb-2026.firebasestorage.app",
  messagingSenderId: "1051462205277",
  appId: "1:1051462205277:web:e8b0cb10c502073d7cf2b4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


let uid = localStorage.getItem("uid");
if (!uid) {
  uid = crypto.randomUUID();
  localStorage.setItem("uid", uid);
}

window.db = db;
window.uid = uid;
window.ref = ref;
window.update = update;
window.onValue = onValue;
