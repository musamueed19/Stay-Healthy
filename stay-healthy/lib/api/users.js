"use server";

import firestoreDatabase from "@/firebaseConfig";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";

// import sha256 crypto
// import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";

export async function createUser(payload) {
  try {
    const docRef = collection(firestoreDatabase, "users");

    // here first check, unique constraint (email)
    const queryStmt = query(
      collection(firestoreDatabase, "users"),
      where("email", "==", payload.email)
    );

    const querySnapshot = await getDocs(queryStmt);
    console.log(querySnapshot);

    if (querySnapshot.size > 0) {
      return {
        success: false,
        message: "User already exists with this email.",
      };
    }

    //   Now, just preparation to add user
    //   hash the passwod
    const hashedPassword = CryptoJS.AES.encrypt(
      payload.password,
      process.env.HASHKEY
    ).toString();
    payload.password = hashedPassword;

    await addDoc(docRef, payload);

    return {
      success: true,
      message: "User created successfully.",
    };
  } catch (error) {
    // if, got error during firebase - connection, return here
    return { success: false, message: error };
  }
}
