"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Search from "@/components/header/search";
import { barlow } from "@/utils/fonts";
import HeaderDropdown from "@/components/header/dropdown";
import Link from "next/link";


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
			className={`w-full h-12 md:h-16 z-50 sticky top-0 shadow-sm border-b transition-colors duration-300 dark:backdrop-blur-lg backdrop-blur-sm border-zinc-300 dark:border-gray-800 dark:bg-transparent ${headerColor}`}
			ref={headerRef}
		>
			<div className="mx-auto h-full max-w-8xl px-6 items-center justify-between flex">
				<Link 
                    className={`flex relative space-x-3 ${barlow.className}`}
                    href="/"
                >
					<Image
						src="/eba.svg"
						alt=""
						height={64}
						width={64}
						className=""
					/>
					<h1 className="font-semibold translate-y-1/4 mb-1 text-xl -skew-x-6 hidden md:block">
						Eğitim Bilişim Ağı
					</h1>
				</Link>
				<div className="flex space-x-3">
					<Search />
                    <HeaderDropdown />
				</div>
			</div>
		</header>
	);
};