"use client"
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function DevTools() {
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div 
                className="fixed bottom-0 right-0 flex items-center pr-3 pl-1 py-1 z-[9999] space-x-3 rounded transition-colors bg-white hover:bg-zinc-200 dark:bg-transparent hover:dark:bg-zinc-900" 
                tabIndex={-1}
            >
                <ThemeSwitcher />
                
                <p className="block xs:hidden">xs</p>
                <p className="hidden xs:block sm:hidden">sm</p>
                <p className="hidden sm:block md:hidden">md</p>
                <p className="hidden md:block lg:hidden">lg</p>
                <p className="hidden lg:block xl:hidden">xl</p>
                <p className="hidden xl:block">2xl</p>
            </div>
        );
    };
};