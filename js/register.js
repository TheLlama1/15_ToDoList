import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoytzxtVXT11HLZClSG-EYoGBip-3hl6Q",
  authDomain: "important-85b27.firebaseapp.com",
  projectId: "important-85b27",
  storageBucket: "important-85b27.appspot.com",
  messagingSenderId: "308013871215",
  appId: "1:308013871215:web:5ff70da2ff5b8f712c5d9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitLogin = document.getElementById("submit");
submitLogin.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      window.location.href = "profile.html"; // Redirect to profile page or any other page you want
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // Handle errors appropriately (e.g., display error messages to the user)
    });
});
