import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Props = {
    stage: number;
    res: {
        message: string;
        status: string;
    };
};

export function Stage4({ stage, res }: Props) {

    return (
        <div className="flex flex-col justify-end w-1/4 space-y-3">
                <p className="font-bold text-center text-xl text-gray-800 dark:text-gray-200 px-2">
                    Hadi Bilgilerini Kontrol Edelim.
                </p>            
                <div className="flex flex-col items-center justify-center space-y-4 h-full w-full">
                { res.status === "loading" ? 
                    <Spinner /> :
                    res.status === "error" ? 
                    <>
                        <AlertTriangle className="stroke-red-600 dark:stroke-red-600" height={48} width={48} />
                        <p className="text-red-500 dark:-text-red-600 text-2xl text-center">
                            { res.message === "This email is already exists" && "Bu E-posta Zaten Kullanımda!" }
                            { res.message === "This username is already exists" && "Bu Kullanıcı Adı Zaten Kullanımda!" }
                        </p>
                    </> : 
                        <>
                            <CheckCircle2 className="stroke-green-600 dark:stroke-green-600" height={48} width={48} />
                            <p className="text-green-600 dark:text-green-600 text-2xl text-center">Hesabını Başarıyla Oluşturduk!</p>
                        </>
                }
            </div>
            <Button 
                type="submit" 
                disabled={res.status === "error" && stage === 4 ? true : false}
                asChild={stage >= 4 && res.status === "success"}
            >
                {
                    res.status === "success" ? 
                    <Link href="/myprofile">Hesabımı Düzenleyelim!</Link> : "Hesabımı Düzenleyelim!" 
                }
            </Button>
        </div>
    );
};

// <Button 
//     type="submit" 
//     disabled={response.status === "error" && stage === 4 ? true : false}
//     asChild={stage >= 4 && response.status === "success"}
// >
//     { stage >= 4 ? 
//         response.status === "success" ? 
//         <Link href="/myarea">Keşfetmeye Başlayalım!</Link> : "Keşfetmeye Başlayalım!" : 
//         "Devam Et!" }
// </Button>