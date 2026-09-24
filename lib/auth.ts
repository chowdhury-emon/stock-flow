import { app } from "@/lib/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth(app);

export const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}
