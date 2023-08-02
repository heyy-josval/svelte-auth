import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCM2M13hM49smvaZ0OEpUySBCBV5hzHm6M",
    authDomain: "svelte-auth-9b6e2.firebaseapp.com",
    projectId: "svelte-auth-9b6e2",
    storageBucket: "svelte-auth-9b6e2.appspot.com",
    messagingSenderId: "625294695806",
    appId: "1:625294695806:web:227b61878e3589240ce72f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
