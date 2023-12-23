import type { Metadata } from "next";
import "./globals.css";
import { GlobalContextProvider } from "@/app/context/store";
import { inter } from "@/utils/fonts"


import DevTools from "@/components/devTools";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <html lang="en-US" className="min-h-screen light">
            <body className={`${inter.className} text-gray-800 dark:text-gray-200 antialiased bg-white dark:bg-black w-screen min-h-screen overflow-x-hidden`}>
                <GlobalContextProvider>
                    <Header />
                    { children }
                    <Footer />
                    <DevTools />
                </GlobalContextProvider>
            </body>
        </html>
    );
};