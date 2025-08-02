import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const textFont = Inter({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
})


export const Logo = () =>  {
    return (
        <Link href = "/">
            <div className="hover:opacity-75 transition items-center gap-x-2 md:flex">
                <Image
                    src="/logo.svg" 
                    alt = "Logo not Found"
                    height={30}
                    width={30}
                />
                <p className={cn("text-lg text-neutral-700 pb-1 hidden md:flex font-bold",textFont.className)}>
                    NexBoard
                </p>
            </div>
        </Link>
    )
}