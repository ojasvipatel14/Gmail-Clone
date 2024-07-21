// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeGQniUal_LiM5EXvmj-u7_ca98bDbtiA",
  authDomain: "clone-yt-bdc63.firebaseapp.com",
  projectId: "clone-yt-bdc63",
  storageBucket: "clone-yt-bdc63.appspot.com",
  messagingSenderId: "163711139530",
  appId: "1:163711139530:web:fba16b98042072e8b03e33",
  measurementId: "G-JEN1VMCMVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();

// Export the necessary objects
export { auth, db, provider };
