import { getAuth, onAuthStateChanged } from "./config.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
window.location = "index.html"
 

    const uid = user.uid;
  } else {
    window.location = "allblog.html";
    // if(window.path == "index.html"){
    //  window.location = "login.html"
    // }
    // window.location = "login.html";
  }
});

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click' , () => {
    window.location = "login.html";
})