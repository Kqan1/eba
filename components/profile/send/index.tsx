"use client"
import { useRef } from "react";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CopyIcon, Send } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

type Props = {
    userId: string;
};

export default function SendComponent({ userId }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleCopy(){
        navigator.clipboard.writeText(`${inputRef.current?.value}`);
    }

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon">
					<Send />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Hesabını Paylaş</DialogTitle>
					<DialogDescription>
						Aşağıdaki Linki Kopyalayarak Bu Profili Paylaşabilirisin.
					</DialogDescription>
				</DialogHeader>
                { userId === "error" ? 
                    <Button disabled>Linke Geçici Olarak Ulaşılamıyor</Button> : 
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Input
                                id="link"
                                defaultValue={`${process.env.NEXTAUTH_URL}/profile/${userId}`}
                                readOnly
                                ref={inputRef}
                            />
                        </div>
                        <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
                            <span className="sr-only">Copy</span>
                            <CopyIcon className="h-4 w-4" />
                        </Button>
                    </div> 
                }
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Kapat
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
