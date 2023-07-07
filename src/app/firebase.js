import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAXAUiVyz44-SwGaL8jLRaXMH45EJqu_bs",
    authDomain: "test-8211e.firebaseapp.com",
    projectId: "test-8211e",
    storageBucket: "test-8211e.appspot.com",
    messagingSenderId: "167960805424",
    appId: "1:167960805424:web:caff3ec170006d341a2df5"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);