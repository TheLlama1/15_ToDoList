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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("login");
const errorMessageContainer = document.createElement("div");
errorMessageContainer.style.color = "red";
errorMessageContainer.style.marginTop = "10px";

const passwordInput = document.getElementById("password");
loginForm.insertBefore(errorMessageContainer, passwordInput.nextElementSibling);

const submitLogin = document.getElementById("submit");
submitLogin.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        errorMessageContainer.textContent = "Invalid Password!";
      } else {
        errorMessageContainer.textContent = error.message;
      }
    });
});
