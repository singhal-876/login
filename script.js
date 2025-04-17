import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA83eo-Ioe3vCf1HBnKWH-PAHsrTzKsrS4",
  authDomain: "vakalat-insaff.firebaseapp.com",
  projectId: "vakalat-insaff",
  storageBucket: "vakalat-insaff.firebasestorage.app",
  messagingSenderId: "566310456895",
  appId: "1:566310456895:web:37c95b13dbfe21f121328a"
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const container   = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn    = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});
