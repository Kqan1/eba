"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { barlow } from "@/utils/fonts";

import Search from "@/components/header/search";
import HeaderDropdown from "@/components/header/dropdown";
import Notifications from "@/components/header/notifications";
import ThemeSwitcher from "@/components/ThemeSwitcher";


export default function Header() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [headerColor, setHeaderColor] = useState<string>("bg-transparent");

    const headerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const scrollHandler = () => {
			if (headerRef.current) {
				const currentPosition =
					headerRef.current.getBoundingClientRect().top + 20;
				setScrollPosition(currentPosition);

				if (window.scrollY <= currentPosition) {
					setHeaderColor("bg-transparent");
				} else if (window.scrollY >= currentPosition) {
					setHeaderColor("bg-gray-200/40");
				}
			}
		};

		window.addEventListener("scroll", scrollHandler, true);
		return () => window.removeEventListener("scroll", scrollHandler, true);
	}, [scrollPosition]);

	return (
		<header
			className={`w-full h-12 md:h-16 z-50 sticky top-0 border-b transition-colors duration-300 dark:backdrop-blur-lg backdrop-blur-sm border-gray-200/70 dark:border-gray-800/60 dark:bg-transparent ${headerColor}`}
			ref={headerRef}
		>
			<div className="mx-auto h-full max-w-8xl px-6 items-center justify-between flex">
				<Link 
                    className={`flex relative ${barlow.className}`}
                    href="/"
                >
					<Image
						src="/eba-light.svg"
						alt=""
						height={64}
						width={64}
						className="block dark:hidden"
					/>
					<Image
						src="/eba-dark.svg"
						alt=""
						height={64}
						width={64}
						className="hidden dark:block"
					/>
					<h1 className="font-semibold translate-y-1/4 mb-1 ml-3 text-xl -skew-x-6 hidden md:block">Eğitim Bilişim Ağı</h1>
				</Link>
				<div className="flex space-x-3 divide-x h-6">
					<div className="flex items-center font-semibold text-sm space-x-4">
						<Search />
						<Link href="" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">Link1</Link>
						<Link href="" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">Link2</Link>
						<Link href="" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">Link3</Link>
					</div>
					<div className="space-x-2 pl-4 flex h-full">
						<Notifications />
						<ThemeSwitcher />
					</div>
					<div className="pl-4 flex items-center ">
						<HeaderDropdown />
					</div>
				</div>
			</div>
		</header>
	);
};