import { Metadata } from "next";
import Form from "@/components/forms/signup";
import Image from "next/image";
import IconDark from "@/public/eba-dark.svg"
import IconLight from "@/public/eba-light.svg"

export const metadata: Metadata = {
    title: "Kayıt Ol - Yesil Site",
};

export default function Signup(){
    return (
        <div className="h-full w-screen flex flex-col justify-between">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative aspect-square h-48">
                <Image
                        src={IconLight}
                        alt="yesil site"
                        fill
                        priority={true}
                        className="dark:hidden"
                    />
                    <Image
                        src={IconDark}
                        alt="yesil site"
                        fill
                        priority={true}
                        className="hidden dark:block"
                    />
                </div>
                <span className="font-bold text-center text-2xl text-gray-800 dark:text-gray-200 px-2">
                    Hadi Seni Hazırlayalım.
                </span>
            </div>
            <div className="relative max-w-2xl w-full mx-auto px-4 xs:px-8 mt-8">
                <Form />
            </div>
        </div>
    );
};