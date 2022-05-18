// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh5fi0UID9tuEJKWZdbiD0XICB-xUCDmQ",
  authDomain: "skill-test-3664a.firebaseapp.com",
  projectId: "skill-test-3664a",
  storageBucket: "skill-test-3664a.appspot.com",
  messagingSenderId: "80635295813",
  appId: "1:80635295813:web:d869b9d211f3558dd28b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth