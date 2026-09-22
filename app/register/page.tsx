'use client'
import { createUser } from "@/lib/auth";
import { useState } from "react"
import type { FormEvent } from "react"

interface RegisterFrom {
    email: string;
    password: string;
    confirm: string;
}

export default function RegisterPage() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (email?.trim() && password?.trim() && confirmPassword?.trim() === password.trim()) {
            console.log("FORM INPUTS: ", email, password)
            try {
                const res = await createUser(email, password);
                if (res.user) {
                    setIsLoading(false);
                    console.log(res.user)
                }
            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
    }


    return (
        <div className="min-h-screen grid place-content-center">
            <form onSubmit={handleCreateUser} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                <h1 className="fieldset-legend">Login</h1>

                <label className="label">Email</label>
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label">Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    minLength={6} required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label className="label">Confirm Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    minLength={6} required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-neutral mt-4"
                    disabled={isLoading}>
                    <span className={isLoading ? "loading" : ""}></span> Login
                </button>
            </form>

        </div>
    )
}