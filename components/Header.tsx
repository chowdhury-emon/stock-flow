import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-background border-b flex justify-between p-4">
            <h1 className="text-3xl font-black"> <Link href={'/'}>Stock Flow</Link> </h1>

            <nav className="flex gap-4">
                <Button variant="outline">
                    <Link className="btn" href={'/register'}>Sign Up</Link>
                </Button>
                <Button >
                    <Link className="btn" href={'/login'}> Log In</Link>
                </Button>

            </nav>
        </div>
    )
}