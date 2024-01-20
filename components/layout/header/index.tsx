"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { barlow } from "@/utils/fonts";

import Search from "@/components/utils/search";
import HeaderDropdown from "@/components/layout/header/dropdown";
import Notifications from "@/components/utils/notifications";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";
import { Separator } from "@/components/ui/separator"

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
					setHeaderColor("bg-gray-200/70");
				}
			}
		};

		window.addEventListener("scroll", scrollHandler, true);
		return () => window.removeEventListener("scroll", scrollHandler, true);
	}, [scrollPosition]);

	return (
		<header
			className={`w-full h-12 min-h-[3rem] md:h-16 md:min-h-[4rem] z-50 sticky top-0 border-b transition-colors duration-300 dark:backdrop-blur-lg backdrop-blur-sm border-gray-200/70 dark:border-gray-800/60 dark:bg-transparent ${headerColor}`}
			ref={headerRef}
		>
			<div className="mx-auto h-full max-w-8xl px-2 xs:pl-6 items-center justify-between flex">
				<Link 
                    className={`flex relative ${barlow.className}`}
                    href="/"
					aria-label="go to first page"
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
					<h1 className="font-semibold translate-y-1/4 mb-1 ml-3 text-xl -skew-x-6 hidden lg:block">Eğitim Bilişim Ağı</h1>
				</Link>
				<div className="flex items-center">
					<Search />
					<div className="space-x-4 ml-2 md:ml-4 font-semibold text-sm text-gray-500 dark:text-gray-400 hidden md:block">
						<Link href="" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-75">Link1</Link>
						<Link href="" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-75">Link2</Link>
						<Link href="" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-75 pr-4">Link3</Link>
					</div>

					<Separator orientation="vertical" className="h-8" />

					<div className="mx-2 flex">
						<Notifications />
						<ThemeSwitcher />
					</div>

					<Separator orientation="vertical" className="h-8" />

					<HeaderDropdown />
				</div>
			</div>
		</header>
	);
};