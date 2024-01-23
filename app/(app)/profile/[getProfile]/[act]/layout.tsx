import ProfileError from "@/components/layout/profile/error";
import SendComponent from "@/components/profile/send";
import { Button } from "@/components/ui/button";
import useProfile from "@/hooks/useProfile";
import { authOptions } from "@/utils/authoptions";
import { ChevronLeft, PencilRuler } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

type Props = { 
    children: React.ReactNode; 
    params: { 
        getProfile: string; 
        act: string; 
    };
};

export default async function RootLayout({ children, params }: Props) {
    const session = await getServerSession(authOptions);
    let selectedId = params.getProfile;
    const [profile] = await useProfile(selectedId);

    if (!profile) return <ProfileError />;

    return (
        <div className="max-w-8xl mx-auto flex flex-col items-center p-2 xs:p-4 sm:px-8">
            <div className="w-full h-44 md:h-60 mb-14 relative flex max-md:justify-center items-end">
                <Image
                    src={profile.banner}
                    alt={`${profile.banner}'nin Banner'i`}
                    fill
                    className="rounded md:rounded-lg -z-10 border border-gray-200 dark:border-gray-800"
                />
                { params.act !== "main" &&
                    <div className="absolute top-2 left-2">
                    <Button variant="outline" className="p-0">
                        <Link href={`/profile/${params.getProfile}/main`} className="space-x-2 pl-1 pr-4 py-2 flex items-center">
                            <ChevronLeft />
                            <p>Geri Dön</p>
                        </Link>
                    </Button>
                </div>
                }
                <div className="absolute h-min max-md:top-2 sm:bottom-2 right-2 space-x-2">
                    <SendComponent userId={profile.id} />
                    { session?.user?.id === selectedId && 
                    <Button variant="outline" className="space-x-2">
                        <PencilRuler />
                        <p>Profilimi Düzenle</p>
                    </Button>
                    }
                </div>
                <div className="flex p-2 h-20 md:h-24 md:ml-10 space-x-2 translate-y-1/2 rounded-xl bg-neutral-50 dark:bg-black border border-gray-200 dark:border-gray-800">
                    <Image
                        src={profile.pp}
                        alt={`${profile.pp}'nin Profil Fotoğrafı`}
                        height={80}
                        width={80}
                        className="rounded-md h-16 md:h-20 w-16 md:w-20"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="md:text-2xl font-medium">{ profile.username }</p>
                        <p className="md:text-lg">{ profile.role }</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full w-full space-y-4">
                { children }
            </div>
        </div>
    );
};