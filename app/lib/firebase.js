
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBXYhsBlopv_RwCIaldVD2pmwALZ6D9ayU",
    authDomain: "news-app-b1652.firebaseapp.com",
    projectId: "news-app-b1652",
    storageBucket: "news-app-b1652.appspot.com",
    messagingSenderId: "831930050957",
    appId: "1:831930050957:web:22d978a38e1eb05415b5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()