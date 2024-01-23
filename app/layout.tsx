import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from "@/app/context/store";
import { inter } from "@/utils/fonts"

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/shadcn";

export const metadata: Metadata = {
    title: "EBA - Eğitim Bilişim Ağı",
    description: 
        "Eğitim Bilişim Ağı öğretmenler ile öğrenciler arasında iletişim kurmak, eğitim hayatları boyunca kullanabilecekleri materyalleri sağlamak üzere kurulan eğlenceli bir portaldir.",
    authors: [{name: "Kqan", url:"https://kqan1.github.com/"}],
    keywords: [
        "MEB",
        "YEĞİTEK",
        "EBA", "Eğitim Bilişim Ağı",
        "sosyal eğitim platformu", 
        "eğitim", 
        "içerik"
    ],
    category: "education",
    generator: "next.js",
    appleWebApp: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr-TR" className="h-full light">
            <body className={cn(inter.className, "relative text-gray-800 dark:text-gray-200 antialiased bg-neutral-50 dark:bg-black overflow-x-hidden h-full")}>
                <GlobalContextProvider>
                    <main className="relative flex flex-col min-h-screen">
                        <Header />
                        <div className="relative flex-grow flex-1 h-full">
                            {children}
                        </div>
                        <Footer />
                    </main>
                    <div className="fixed bottom-2 right-2 p-2 bg-gray-300 rounded">
                        <p className="block md:hidden">sm</p>
                        <p className="hidden md:max-lg:block">md</p>
                        <p className="hidden lg:max-xl:block">lg</p>
                        <p className="hidden xl:max-2xl:block">xl</p>
                        <p className="hidden 2xl:block">2xl</p>
                    </div>
                </GlobalContextProvider>
            </body>
        </html>
    );
};