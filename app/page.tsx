import { barlow } from "@/utils/fonts";
import Image from "next/image"
export default async function Home() {
    return (
        <>
            <section className="h-[calc(100vh-6.5rem)]">
                <div className="relative h-full">
                    <Image
                        src="/ebawithtitle.svg"
                        alt="Eba Logo With Title"
                        fill
                    />
                </div>
            </section>
            <section>
                <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 w-7/12 h-[32rem] md:h-64 lg:h-32 mx-auto py-6 shadow rounded-2xl border border-gray-200/70 dark:border-gray-800/60 md:divide-x divide-y lg:divide-y-0 divide-gray-200/70">
                    <div className={`${barlow.className} flex justify-center items-center flex-col h-full`}>
                        <p className="text-5xl">3.005</p>
                        <p className="text-2xl">Ders</p>
                    </div>
                    <div className={`${barlow.className} flex justify-center items-center flex-col h-full md:!border-t-0`}>
                        <p className="text-5xl">64.137</p>
                        <p className="text-2xl">İçerik</p>
                    </div>
                    <div className={`${barlow.className} flex justify-center items-center flex-col h-full`}>
                        <p className="text-5xl">85.307</p>
                        <p className="text-2xl">Soru</p>
                    </div>
                    <div className={`${barlow.className} flex justify-center items-center flex-col h-full`}>
                        <p className="text-5xl">4.328</p>
                        <p className="text-2xl">Kitap</p>
                    </div>
                </div>
            </section>
        </>
    );
};