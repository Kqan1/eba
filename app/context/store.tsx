"use client"
import React, { createContext, useContext } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
// import { NextUIProvider } from "@nextui-org/react";

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
                {/* <NextUIProvider> */}
                    <GlobalContext.Provider value={{  }}>
                        { children }
                    </GlobalContext.Provider>
                {/* </NextUIProvider> */}
            </ThemeProvider>
        </SessionProvider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);