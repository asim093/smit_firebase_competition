import { getAuth, onAuthStateChanged, signOut, db, addDoc, collection, getDocs } from "./config.js";

document.addEventListener('DOMContentLoaded', async () => {
  const auth = getAuth(); 

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (window.location.pathname !== '/index.html') {
        window.location.href = "index.html";
      }
    } else {
      if (window.location.pathname !== '/allblog.html' && window.location.pathname !== '/login.html') {
        window.location.href = "allblog.html";
      }
    }
  });

  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = "login.html";
    });
  }

  const publishBtn = document.getElementById('Publish');
  if (publishBtn) {
    publishBtn.addEventListener('click', async () => {
      const blogDescription = document.getElementById('blog-description').value;
      const blogHeading = document.getElementById('blog-heading').value;
      if (auth.currentUser) {
        await addDoc(collection(db, "blogs"), {
          blogTitle: blogDescription,
          blogHeading: blogHeading,
          uid: auth.currentUser.uid,
        });
        swal("Blog Publish successful", {
          icon: "success",
          button: "OK",
        });
      } else {
        swal("You must be logged in to publish a blog!", {
          icon: "error",
          button: "OK",
        });
      }
    });
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (event) => {
      signOut(auth).then(() => {
        swal({
          title: "Logout Successful",
          text: "You have been logged out successfully",
          icon: "success",
          button: "Ok",
        }).then(() => {
          window.location = 'login.html';
        });
      }).catch((error) => {
        swal({
          title: "Logout Failed",
          text: error.message,
          icon: "error",
          button: "Ok",
        });
        console.error('Error during sign out:', error);
      });
    });
  }

  const blogContainer = document.querySelector('.blog-container');
  const querySnapshot = await getDocs(collection(db, "blogs"));
  
  querySnapshot.forEach((doc) => {
    const blogData = doc.data();
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    
    blogCard.innerHTML = `
    <div class="border py-[5rem] px-[5rem]">
     <h3 class="text-2xl">${blogData.blogHeading}</h3>
      <p>${blogData.blogTitle}</p>
    </div>
     
    `;

    blogContainer.appendChild(blogCard);
  });
});
