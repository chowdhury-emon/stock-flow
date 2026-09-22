import { app } from "@/lib/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);
console.log("AUTH FILE EXECUTED")

export const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
