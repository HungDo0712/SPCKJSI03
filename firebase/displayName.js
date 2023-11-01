import { onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
import { auth } from "./config.js"

const welcomeText = document.getElementById('welcome-text');
const loginBtn = document.getElementById('login-btn');
const handleLogout = () => {
  signOut(auth).then(() => {
      window.location = './index.html'
    
    })
  .catch((error) => {
    });
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    loginBtn.textContent = 'Logout';
    loginBtn.addEventListener('click',handleLogout)

  }
  else {
    // window.location = './login.html'
  }
});