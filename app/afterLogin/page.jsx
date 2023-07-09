"use client"

import React, { useId, useState } from 'react';
import { database } from '../firebase';
import { collection, addDoc, getDocs, setDoc, where, doc, query, updateDoc, deleteDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { Loading } from '@nextui-org/react';
import LoadingScreen from '../Components/loadingscreen';
import Dashboard from "../dashboard/page"


const AfterLogin = () => {

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const myId = userId

    const router = useRouter();


    async function func() {
        const q = query(collection(database, "UserInformation"), where("UserId", "==", myId));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No");
            router.push("/contact")
        }
        else {
            console.log("Yes");
            router.push("/dashboard")
        }

    }
    func()
    return (
        <div>
            <strong>Loading...</strong>
            <div
                class="ml-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"></div>
       </div>
    )
}
export default AfterLogin