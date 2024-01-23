import Link from "next/link";
import useProfile from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Award, FileBadge, Frown, Highlighter, Medal, SquareUserRound } from "lucide-react";
import Image from "next/image";

import icon from "@/public/pp/default.svg"

type Props = { 
    params: { 
        getProfile: string; 
        act: string; 
    };
};

export default async function ProfileMain({ params }: Props){
    const [profile, medals, error] = await useProfile(params.getProfile);

    const maxXp: number = 2000;
    const xpPercentage: number = (100 * (profile?.xp === undefined || null ? 0 : profile?.xp)) / maxXp;
    const xpMargin: string = `calc(${xpPercentage}% - ${profile?.xp.toString().length}ch)`

    return (
        <>
            <Button variant="outline" className="w-full h-auto flex flex-col cursor-default">
                <>
                    <h2 className="text-center font-semibold text-lg">Seviye {profile?.level}</h2>
                    <div className="w-full h-3 rounded-md border border-gray-200/70 dark:border-gray-800/60">
                        <div className="bg-emerald-500 rounded-md h-full w-full xp-bar" style={{width: `${xpPercentage}%`}}></div>
                    </div>
                    <div className="w-full flex justify-between">
                        <p style={{marginLeft: xpMargin}}>{profile?.xp}xp</p>
                        <p>{maxXp}xp</p>
                    </div>
                </>              
            </Button>
            <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-3 lg:grid-rows-1 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="w-full h-auto min-h-[10rem] flex flex-col justify-normal cursor-default whitespace-normal">
                    <>
                        <h2 className="flex items-center font-semibold text-lg"><SquareUserRound />&nbsp;Biografi</h2>
                        <p className={profile?.bio ? "": "flex items-centerj justify-center h-full w-full"}>{
                            profile?.bio || 
                            <>Burada Bakılacak Bir Şey Yok&nbsp;<Frown /></>
                        }</p>
                    </>              
                </Button>
                <Button variant="outline" className="max-md:row-span-3 max-lg:row-span-2 lg:col-span-3 w-full h-auto flex flex-col cursor-default">
                    <>
                        <h2 className="flex items-center font-semibold text-lg mb-1"><Highlighter />&nbsp;Öne Çıkanlar</h2>
                        <div className="grid md:grid-cols-3 max-md:grid-rows-3 max-md:divide-y md:divide-x divide-gray-200">
                            <div className="">
                                <p className="text-lg font-medium">İlk Giriş</p>
                                <div className="relative aspect-square w-full">
                                    <Image src={icon} alt="" fill />
                                </div>
                                <p>Hesaba ilk giriş</p>
                            </div>
                            <div className="aspect-square">
                                Öne Çıkanlar
                            </div>
                            <div className="aspect-square">
                                Öne Çıkanlar
                            </div>
                        </div>
                    </>
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto" asChild>
                    <Link href={`/profile/${profile?.id}/achievements`} className="flex flex-col !justify-normal">
                        <h2 className="flex items-center font-semibold text-lg"><Medal />&nbsp;Başarılar</h2>
                        <p>test</p>
                    </Link>
                </Button>
                <Button variant="outline" className="h-auto" asChild>
                    <Link href={`/profile/${profile?.id}/medals`} className="flex flex-col !justify-normal">
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
                <Button variant="outline" className="col-span-2 h-auto" asChild>
                    <Link href={`/profile/${profile?.id}/documents`} className="flex flex-col !justify-normal">
                        <h2 className="flex items-center font-semibold text-lg"><FileBadge />&nbsp;Sertifika ve Katılım Belgeleri</h2>
                        <div className="grid grid-cols-2 w-full h-full">
                            <div className="">test</div>
                            <div className="">test</div>
                        </div>
                    </Link>
                </Button>
            </div>
        </>
    );
};