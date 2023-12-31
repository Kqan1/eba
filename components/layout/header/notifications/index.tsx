import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { Settings, User, BellElectric, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Notification = {
    Id: string;
    Text: string;
    Link: string;
    New: boolean;
    Subject: "homework" | "other";
    Date: Date;
};

export default function Notifications() {
	const [response, setResponse] = useState<Notification[]>()
    const [error, setError] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
    const { data: session, status } = useSession();

	useEffect(()=>{
        async function getInfo() {
            try {
                const res = await fetch("/api/notifications", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: session?.user?.id
                    }),
                });
                const resJSON = await res.json();
                setResponse(resJSON.res);
                setError(false);
            } catch (error) {
                setError(true);
            };
        };
        getInfo();
    }, [open])

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger className="outline-none flex items-center" asChild>
				<Button
					className={`[&>svg>*]:hover:stroke-gray-800 [&>svg>*]:hover:dark:stroke-gray-200 ${status !== "authenticated" && "hidden" }`}
                    size="icon"
					variant="ghost"
				>
					<BellElectric
						width={22}
						height={22}
						className="stroke-gray-600 dark:stroke-gray-400 transition-colors"
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-96 h-80">
				<DropdownMenuLabel className="flex justify-between items-center py-0 pr-1">
					<p className="text-base font-semibold">Bildirimler: </p>
					<Button className="h-8" size="icon" variant="outline">
						<Settings />
					</Button>
				</DropdownMenuLabel>
                <DropdownMenuSeparator />
				{ error ?
                    <div className="flex flex-col items-center justify-center h-5/6 w-full px-10 text-center space-y-2">
                        <AlertTriangle className="stroke-gray-600 dark:stroke-gray-400" />
                        <p>Beklenmedik Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin.</p>
                    </div> : response ?
                        response?.map( (element: Notification, index: number) =>
                            <>
                                <Link href={element.Link ||"/"} key={index}>
                                    <DropdownMenuItem className="cursor-pointer flex justify-between">
                                        <div className="flex">
                                            {}
                                            <User className="mr-2 h-4 w-4" />
                                            {element.Text}
                                        </div>
                                        { element.New && <p>New</p>}
                                    </DropdownMenuItem>
                                </Link>
                            </>
                            )
                        : <div className="flex items-center justify-center h-5/6 w-full text-gray-600">
                            <Spinner />
                        </div>
                }
			</DropdownMenuContent>
		</DropdownMenu>
	);
};