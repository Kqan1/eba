import Link from "next/link";
import useProfile from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Award, FileBadge, Highlighter, Medal, SquareUserRound } from "lucide-react";
import useMedals from "@/hooks/useMedals";
import Image from "next/image";

type Props = { 
    params: { 
        getProfile: string; 
        act: string; 
    };
};

export default async function ProfileMain({ params }: Props){
    const [profile] = await useProfile(params.getProfile);
    const [medals, error] = await useMedals(params.getProfile);

    return (
        <>
            <div className="flex max-lg:flex-col lg:space-x-4 max-lg:space-y-4">
                <Button variant="outline" className="w-full h-auto flex flex-col cursor-default">
                    <>
                        <h2 className="flex items-center font-semibold text-lg">Seviye 16</h2>
                        <div className="w-full h-3 rounded-md border border-gray-200/70 dark:border-gray-800/60">
                            <div className="bg-emerald-500 rounded-md h-full w-[33%]"></div>
                        </div>
                    </>              
                </Button>
            </div>
            <div className="flex max-lg:flex-col lg:space-x-4 max-lg:space-y-4">
                <Button variant="outline" className="lg:w-1/4 h-auto flex flex-col justify-normal cursor-default">
                    <div className="whitespace-normal">
                        <h2 className="flex items-center font-semibold text-lg"><SquareUserRound />&nbsp;Biografi</h2>
                        <p>{ profile.bio }</p>
                    </div>              
                </Button>
                <Button variant="outline" className="lg:w-3/4 h-auto flex flex-col justify-normal cursor-default">
                    <div className="w-full">
                        <h2 className="flex items-center font-semibold text-lg mb-1"><Highlighter />&nbsp;Öne Çıkanlar</h2>
                        <div className="grid md:grid-cols-3 max-md:grid-rows-3 max-md:divide-y md:divide-x divide-gray-200">
                            <div className="aspect-square">Öne Çıkanlar</div>
                            <div className="aspect-square">Öne Çıkanlar</div>
                            <div className="aspect-square">Öne Çıkanlar</div>
                        </div>
                    </div>
                </Button>
            </div>
            <div className="flex max-lg:flex-col lg:space-x-4 max-lg:space-y-4">
                <Button variant="outline" className="lg:w-1/4 h-auto" asChild>
                    <Link href={`/profile/${profile.id}/achievements`} className="flex flex-col !justify-normal">
                        <h2 className="flex items-center font-semibold text-lg"><Medal />&nbsp;Başarılar</h2>
                        <p>test</p>
                    </Link>
                </Button>
                <Button variant="outline" className="lg:w-1/4 h-auto" asChild>
                    <Link href={`/profile/${profile.id}/medals`} className="flex flex-col !justify-normal">
                        <h2 className="flex items-center font-semibold text-lg"><Award />&nbsp;Madalyalar</h2>
                        <div className="relative aspect-square w-full">
                            <Image 
                                src={`/medals/${medals?.res[medals.res.length - 1].name}.png`}
                                alt=""
                                fill
                            />
                        </div>
                        <p className="">{medals?.res[medals.res.length - 1].name}</p>
                    </Link>
                </Button>
                <Button variant="outline" className="lg:w-2/4 h-auto" asChild>
                    <Link href={`/profile/${profile.id}/documents`} className="flex flex-col !justify-normal">
                        <h2 className="flex items-center font-semibold text-lg"><FileBadge />&nbsp;Sertifika ve Katılım Belgeleri</h2>
                        <p>test</p>
                    </Link>
                </Button>
            </div>
        </>
    );
};