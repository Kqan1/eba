import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search
} from "lucide-react"

export default function RootSearch() {
	const [open, setOpen] = useState<boolean>(false);

    // ! Disable ctrl + k shortcut for browsers
    useEffect(() => {
        function handleStart(e: BeforeUnloadEvent){
            // Cancel the event
            e.preventDefault();
            // Chrome requires returnValue to be set
            e.returnValue = "Kqan_";
        };

        window.addEventListener('beforepopstate', handleStart);
        return () => window.removeEventListener('beforepopstate', handleStart);;
    }, []);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen(open => !open);
			};
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button
				className="hidden md:flex h-8 justify-start items-center font-normal w-60 relative dark:text-gray-400 [&>div]:hover:dark:bg-gray-600"
				variant="outline"
				aria-label="Open Command Palette"
                onClick={() => setOpen(!open)}
			>
				İçerik Ara
				<div className="flex items-center pointer-events-none select-none text-xs font-mono -tracking-widest rounded absolute right-1.5 h-5 px-1 bg-zinc-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
					Ctrl K
				</div>
			</Button>
            <Button 
                variant="ghost" 
                size="icon"
				aria-label="Open Command Palette"
                className="flex md:hidden mr-2"
                onClick={() => setOpen(!open)}
            >
                <Search className="h-5 w-5" />
            </Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Ulaşmak İstediğin İçeriği Ara..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>
							<Calendar className="mr-2 h-4 w-4" />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<Smile className="mr-2 h-4 w-4" />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<Calculator className="mr-2 h-4 w-4" />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
