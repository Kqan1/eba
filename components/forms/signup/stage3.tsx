import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import pp from "@/public/pp/default.svg"

type Props = {
    formData: {
        email: string;
        password: string;
        username: string;
    };
    stage: number;
};

export function Stage3({ formData, stage }: Props) {
    return (
        <div className="flex flex-col justify-end w-1/4 space-y-3">
            <div className="flex items-center p-3 rounded-md border border-zinc-400/40 dark:border-zinc-50/20 space-x-2">
                <div className="relative rounded-full overflow-hidden h-12 w-12 p-1 outline outline-1 outline-offset-2 hover:outline-2 hover:outline-offset-4 outline-green-500 transition-all">
                    <Image src={pp} alt="varsayılan profil fotoğrafı" fill />
                </div>
                <div className="flex flex-col justify-center space-y-1">
                    <p className="font-medium leading-4">@<span className="font-mono">{ formData.username }</span></p>
                    <p className="text-xs font-medium text-zinc-700/70 dark:text-zinc-200/70">Biografi Buraya Gelecek😎</p>
                </div>
            </div>
        </div>
    );
};