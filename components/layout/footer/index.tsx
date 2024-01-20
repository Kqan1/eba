import Link from 'next/link'
import { Github, Twitter } from "lucide-react";

export default function RootFooter() {

    const date = new Date();
    const thisYear = date.getFullYear();

    return (
        <footer className="flex items-center px-6 py-4 mt-4">
            <div className="md:flex md:justify-around text-center mx-auto max-w-6xl md:space-x-4 space-y-2 md:space-y-0 text-sm leading-6 font-semibold text-zinc-800 dark:text-zinc-200 divide-x divide-gray-200/70 dark:divide-gray-800/60">
                <div className="flex items-center justify-center pr-">
                    <p>&copy; EBA 2023 - {thisYear} Tüm Hakları Saklıdır - <Link href="https://kqan1.github.io">Kqan</Link> Tarafından Yapıldı</p>
                </div>
                <div className="md:pl-4 space-x-2 flex justify-center">
                    <Link href="" aria-label="Go to Kqan's Github"><Github className="stroke-gray-600 hover:stroke-gray-800 dark:stroke-gray-400 dark:hover:stroke-gray-200" /></Link>
                    <Link href="" aria-label="Go to Kqan's Twitter(X)"><Twitter className="stroke-gray-600 hover:stroke-gray-800 dark:stroke-gray-400 dark:hover:stroke-gray-200" /></Link>
                </div>
            </div>
        </footer>
    );
};