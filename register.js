import { auth, createUserWithEmailAndPassword } from "./config.js";

import { getAuth, onAuthStateChanged } from "./config.js";

document.addEventListener('DOMContentLoaded', () => {
  
});

const registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const firstname = document.getElementById('registerfirstname').value;
    const lastname = document.getElementById('registerlastname').value;
    const email = document.getElementById('registeremail').value;
    const password = document.getElementById('registerpassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            swal("User registration successful", {
                icon: "success",
                button: "OK",
            }).then(() => {
                window.location = 'login.html';
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error ${errorCode}: ${errorMessage}`);
            swal("Login failed", errorMessage, "error");
        }).then(() => {
            swal(error, {
                icon: "warning",
                button: "OK",
            }).then(() => {
                window.location = 'login.html';
            });
        })
});
