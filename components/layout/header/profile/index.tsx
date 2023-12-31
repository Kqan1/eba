import ProfileLoadingSkeleton from "@/components/skeletons/profile";
import { Button } from "@/components/ui/button";
import type { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

type Props = {
	session: Session | null
	status: "loading" | "authenticated" | "unauthenticated"
	hidden?: boolean
};

export default function HeaderProfile({ session, status, hidden }: Props) {
	function Authenticated() { 
		if ( hidden ) {
			return (
				<Button
					className={`items-center space-x-2 h-14 ml-2 ${hidden ? "hidden md:flex" : "flex"}`}
					variant="ghost"
				>
					<Image 
						src={`${session?.user?.pp}`} 
						alt={`${session?.user?.pp}'nın Profil Fotoğrafı`}
						title={session?.user?.pp}
						width={48}
						height={48}
						className="rounded-full"
					/>
					<div className="text-start">
						<p>{ session?.user?.username }</p>
						<p className="text-sm leading-4 text-gray-500 dark:text-gray-400 font-normal">{ session?.user?.role }</p>
					</div>
				</Button>
			);
		} else {
			return (
				<div className={`items-center space-x-2 ${hidden ? "hidden md:flex" : "flex"}`}>
					<Image 
						src={`${session?.user?.pp}`} 
						alt={`${session?.user?.pp}'nın Profil Fotoğrafı`}
						title={session?.user?.pp}
						width={48}
						height={48}
						className="rounded-full"
					/>
					<div className="text-start">
						<p>{ session?.user?.username }</p>
						<p className="text-sm leading-4 text-gray-500 dark:text-gray-400 font-normal">{ session?.user?.role }</p>
					</div>
				</div>
			);
		};
	};

	switch (status) {
		case "authenticated":
			return <Authenticated />;
			break;
		case "loading":
			return <ProfileLoadingSkeleton />;
			break;
		case "unauthenticated":
			return <Button onClick={() => signIn()} variant="outline" className="ml-2">Giriş Yap</Button>;
			break;
		default:
			return <p className="bg-red-600 dark:bg-red-500">Bir sorun oluştu</p>;
			break;
	};
};