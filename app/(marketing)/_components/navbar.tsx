import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// no default as it used only for the pages and layouts
export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 p-4 border-b shadow-sm">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-center w-full">
                    <Button size="sm" variant="custom" asChild>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                    </Button>
                    <Button size="sm" variant="default" asChild>
                        <Link href='/sign-up'>
                            Try NexBoard for free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )

}