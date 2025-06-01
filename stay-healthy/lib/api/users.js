"use server"

import firestoreDatabase from "@/firebaseConfig";
import {collection, addDoc} from "firebase/firestore"

export async function createUser(payload) {
    try {
        
        const docRef = collection(firestoreDatabase, "users");
        
        await addDoc(docRef, payload);

        return {
            success: true,
            message: "User created successfully."
        }



    }
    
    // if, got error during firebase - connection, return here
    catch (error) {
        return {success: false, message:error};
    }
}