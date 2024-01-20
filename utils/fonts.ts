import { Inter, Barlow, Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const barlow = Barlow({
    weight: ['700'],
    subsets: ['latin'],
});

const great_vibes = Great_Vibes({
    weight: ["400"],
    subsets: ["latin-ext"]
});

export { inter, barlow, great_vibes };