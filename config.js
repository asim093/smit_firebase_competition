import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import { getDocs, collection, addDoc, getFirestore, query, where } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyALV7P5I5TiXyZXVkL_16JcJzEzZ2n0avg",
  authDomain: "blogging-website-a0e12.firebaseapp.com",
  projectId: "blogging-website-a0e12",
  storageBucket: "blogging-website-a0e12.appspot.com",
  messagingSenderId: "1072600942990",
  appId: "1:1072600942990:web:b0234fadf79d779cda7cdf",
  measurementId: "G-X69HKEE04N"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, getAuth ,  db, storage, onAuthStateChanged, signInWithEmailAndPassword  ,  signOut, createUserWithEmailAndPassword, getDocs, collection, addDoc, ref, uploadBytes, getDownloadURL };
