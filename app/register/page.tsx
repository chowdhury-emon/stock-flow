'use client'
import { createUser } from "@/lib/auth";
import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { toast } from "sonner";


export default function RegisterPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (email?.trim() && password?.trim() && confirmPassword?.trim() === password.trim()) {
            console.log("FORM INPUTS: ", email, password)
            try {
                const res = await createUser(email, password);
                if (res.user) {
                    console.log(res.user)
                    toast.success("User has been created successfully")
                }
            } catch (error) {
                console.log(error)
                toast.error("User account creation failed")
            }
            finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="border grid place-items-center">

            <Card className="min-w-sm">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your information below to create your account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleCreateUser}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    placeholder="m@example.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    minLength={6}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    required
                                    minLength={6}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Field>
                            <Field>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Creating New User" : "Create Account"}
                                </Button>

                                <FieldDescription className="text-center">
                                    Already have an account? <Link href={"/login"}>Sign In</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}