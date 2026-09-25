'use client'
import { auth, loginUser } from "@/lib/auth";
import { FormEvent, useState } from "react"
import { toast } from "sonner";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUserLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (email.trim() && password.trim()) {
            try {
                const user = await loginUser(email, password);
                console.log(user.user);
                console.log("CURRENT USER: ", auth.currentUser)
                toast.success("Logged in Successfully");

            } catch (error) {
                console.error(error)
                toast.error("User Login Failed");

            }
            finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="grid place-items-center">

            <Card className="min-w-xs sm:min-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleUserLogin}>
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
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Field>
                            <Field>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && <Spinner />}
                                    Login
                                </Button>

                                <FieldDescription className="text-center">
                                    Don't have an account? <Link href={"/register"}>Sign up</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>


        </div>
    )
}