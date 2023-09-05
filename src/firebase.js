import { initializeApp } from "firebase/app";
import { getauth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzB0rWplYdP1SqFBC8SiClprC4jgcbBpY",
  authDomain: "instagram-clone-e5caa.firebaseapp.com",
  projectId: "instagram-clone-e5caa",
  storageBucket: "instagram-clone-e5caa.appspot.com",
  messagingSenderId: "368685388498",
  appId: "1:368685388498:web:6ad4f72e5c19f43ea5d30b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();