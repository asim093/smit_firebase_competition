import { auth, signInWithEmailAndPassword, getAuth } from "./config.js";

const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const signupemail = document.getElementById("loginemail").value;
    const signuppassword = document.getElementById("loginpassword").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, signupemail, signuppassword)
        .then((userCredential) => {
            const user = userCredential.user;
            swal("User Login successful", {
                icon: "success",
                button: "OK",
            }).then(() => {
                window.location = 'index.html';
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
