// @ts-nocheck
import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"
import { nextui } from "@nextui-org/react";

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            height: {
                // @ts-ignore
                screen: ['100vh /* for fallback */', '100dvh'],
            },
            maxWidth: {
                "8xl": "90rem", 
            },
            screens: {
                "xs": "321px",
                ...defaultTheme.screens,
            }
        },
    },
    plugins: [require("tailwindcss-animate"), nextui()],
}
export default config;