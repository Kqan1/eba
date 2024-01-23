"use client"
import React, { createContext, useContext } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

type DataType = {
};


interface ContextProps {
};


const GlobalContext = createContext<ContextProps>({
});


export function GlobalContextProvider ({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <GlobalContext.Provider value={{  }}>
                    { children }
                </GlobalContext.Provider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);