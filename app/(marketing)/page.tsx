import Link from "next/link";
import { cn } from "@/lib/utils";

import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const textFont = Inter({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
});
const MarketingPage = () => {
    return (
        <div className="flex items-center justify-centers flex-col">
            <div className={cn(
                "flex items-center justify-centers flex-col",
                 textFont.className
                 )}>
                <div className="flex items-center bg-amber-100 text-amber-700 rounded-full px-2 py-3 uppercase shadow-sm mb-4">
                    <Medal className="h-6 w-6 mr-2"/>
                    No 1 Task Management
                </div>
                <h1 className="font-bold text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Nexboard helps team move
                </h1>
                <div className="text-3xl md:text-6xl text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-md px-4 p-2 pb-4 w-fit shadow-md">
                    work forward
                </div>
                <div className="text-sm md:text-xl text-neutral-500 text-center max-w-xs md:max-w-2xl mt-4 mx-auto">
                    Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Nexboard.
                </div>
                <Button className="mt-6" size="lg" asChild>
                    <Link href="/sign-up">
                        Get Started
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default MarketingPage;