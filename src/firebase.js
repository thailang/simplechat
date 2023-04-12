import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAN7NxYImInQr3dUuKmatV2DIlWaECDnno",
    authDomain: "simplechat-3b063.firebaseapp.com",
    projectId: "simplechat-3b063",
    storageBucket: "simplechat-3b063.appspot.com",
    messagingSenderId: "931578255004",
    appId: "1:931578255004:web:ccead45170f1b237017f59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()