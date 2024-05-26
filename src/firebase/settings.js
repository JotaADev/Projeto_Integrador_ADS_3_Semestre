import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAsjcJYrBlQ0DedcKcjAbewkIKduPWjBps",
    authDomain: "viadeflores.firebaseapp.com",
    projectId: "viadeflores",
    storageBucket: "viadeflores.appspot.com",
    messagingSenderId: "771604585027",
    appId: "1:771604585027:web:d95d1d9c9ecde21b3652f6"
}

const app = initializeApp(firebaseConfig);

export default app;