
import { initializeApp } from "firebase/app";
import { getAuth, Auth, GoogleAuthProvider, UserCredential, signInWithPopup } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAjIi_lNiBhh78UQe0gYfke8JXw_eYrRKo",
    authDomain: "maincraft-8192e.firebaseapp.com",
    projectId: "maincraft-8192e",
    storageBucket: "maincraft-8192e.appspot.com",
    messagingSenderId: "388522394041",
    appId: "1:388522394041:web:a5cc889072bd995774f668",
    measurementId: "G-CDE0FVFQ1H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth: Auth = getAuth();


export function signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    
    return signInWithPopup(auth, provider)
        .then((result) => {
            return result;  
        })
        .catch((error) => {
            console.error(`Error during Google Sign-In: ${error.message}`);
            throw error;
        });
};

export function registerWithEmail(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
};


export function signInWithEmail(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            return result; 
        })
        .catch((error) => {
            console.error(`Error during email sign-in: ${error.message}`);
            throw error;
        });
}

export { auth };
