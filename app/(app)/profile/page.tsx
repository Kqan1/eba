"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    const { data: session } = useSession();
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-2">
            Profile Ulaşmak İçin Kullanıcı ID&apos;i gerekir.
            <code>{process.env.NEXTAUTH_URL}/profile/<span className="text-blue-600 font-semibold">KullanıcıID</span>/</code>
            <Button 
                variant="outline" 
                className="w-72" 
                asChild={session ? true : false}
                disabled={!session ? true : false}
            >
                <Link href={`/profile/${session?.user?.id}/main`}>Hesabıma Git</Link>
            </Button>
            <Button 
                variant="outline" 
                className="w-72"
                onClick={() => router.back()}
            >
                Geri Dön
            </Button>
        </div>
    );
};