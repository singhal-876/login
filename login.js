// login.js
import { auth } from "./script.js";
import { signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const form  = document.getElementById('login-form');
const error = document.getElementById('error');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // success → redirect
    window.location.href = "vakalat.html";

  } catch (err) {
    console.error("Firebase signIn error:", err.code, err.message);

    // translate SDK error codes to user‑friendly text:
    let friendly;
    switch (err.code) {
      case 'auth/invalid-email':
        friendly = "Please enter a valid email address.";
        break;
      case 'auth/user-disabled':
        friendly = "This user account has been disabled.";
        break;
      case 'auth/user-not-found':
        friendly = "No account found with this email.";
        break;
      case 'auth/wrong-password':
        friendly = "Incorrect password. Please try again.";
        break;
      default:
        friendly = "Login failed. Please check your credentials and try again.";
    }

    error.textContent = friendly;
  }
});
