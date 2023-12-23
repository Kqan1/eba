import Profile from "@/components/header/profile";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
	LifeBuoy,
	LogOut,
	MessageSquare,
	Settings,
	User,
	HelpCircle,
	Layout,
	BookMarked,
	Bookmark,
	StickyNote
} from "lucide-react"


export default function HeaderDropdown() {
    const [triggerStatus, setTriggerStatus] = useState({ asChild: true });
    const { data: session, status } = useSession();

    useEffect(() => {
        if ( status === "unauthenticated" ){
            setTriggerStatus({ asChild: true });
        } else {
            setTriggerStatus({ asChild: false })
        }
    }, [status])
    
    return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none" {...triggerStatus}>
				<>
					<svg className={` ${status === "authenticated" ? "block md:hidden" : "hidden"}`} width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
					<Profile session={session} status={status} hidden/>
				</>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel className="space-y-2">
					<p className="text-gray-500">Olarak Giriş Yapıldı:</p>
					<Profile session={session} status={status}/>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
					<Link href="/myprofile"><DropdownMenuItem className="cursor-pointer">
						<User className="mr-2 h-4 w-4" />
						Profilim
					</DropdownMenuItem></Link>
					<Link href="/myarea"><DropdownMenuItem className="cursor-pointer">
						<Layout className="mr-2 h-4 w-4" />
						Kişisel Alanım
					</DropdownMenuItem></Link>
                    <Link href="/messages"><DropdownMenuItem className="cursor-pointer">
						<MessageSquare className="mr-2 h-4 w-4" />
						Direkt Mesajlarım
					</DropdownMenuItem></Link>
				<DropdownMenuSeparator />
					<Link href="/myprofile"><DropdownMenuItem className="cursor-pointer">
						<BookMarked className="mr-2 h-4 w-4" />
						Ödevlerim
					</DropdownMenuItem></Link>
					<Link href="/myarea"><DropdownMenuItem className="cursor-pointer">
						<Bookmark className="mr-2 h-4 w-4" />
						Kaydedilenlerim
					</DropdownMenuItem></Link>
                    <Link href="/messages"><DropdownMenuItem className="cursor-pointer">
						<StickyNote className="mr-2 h-4 w-4" />
						Notlarım
					</DropdownMenuItem></Link>
				<DropdownMenuSeparator />
                <Link href="/settings"><DropdownMenuItem className="cursor-pointer">
					<Settings className="mr-2 h-4 w-4" />
					Ayarlar
				</DropdownMenuItem></Link>
				<Link href="/SSS"><DropdownMenuItem className="cursor-pointer">
					<HelpCircle className="mr-2 h-4 w-4" />
					SSS
				</DropdownMenuItem></Link>
				<Link href="/help"><DropdownMenuItem className="cursor-pointer">
					<LifeBuoy className="mr-2 h-4 w-4" />
					Destek
				</DropdownMenuItem></Link>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
					<LogOut className="mr-2 h-4 w-4" />
					Çıkış Yap
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

/*
*   <DropdownMenuSub>
*   	<DropdownMenuSubTrigger>
*   		Invite users
*   	</DropdownMenuSubTrigger>
*   	<DropdownMenuPortal>
*   		<DropdownMenuSubContent>
*   			<DropdownMenuItem className="cursor-pointer">Email</DropdownMenuItem>
*   			<DropdownMenuItem className="cursor-pointer">Message</DropdownMenuItem>
*   			<DropdownMenuSeparator />
*   			<DropdownMenuItem className="cursor-pointer">More...</DropdownMenuItem>
*   		</DropdownMenuSubContent>
*   	</DropdownMenuPortal>
*   </DropdownMenuSub>
*/