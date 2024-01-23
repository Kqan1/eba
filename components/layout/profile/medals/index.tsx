// @ts-nocheck

import { Button } from "@/components/ui/button";
import useProfile from "@/hooks/useProfile";
import Image from "next/image";
import icon from "@/public/pp/default.svg"

type Props = {
	params: {
		getProfile: string;
		act: string;
	};
};

export default async function ProfileMedals({ params }: Props) {
	const [_, medals, error] = await useProfile(params.getProfile);
	const medal: string[] = medals?.res.map(medal => medal.name) || [];

	function getMedalDate(str: string): string {
		return new Date(medals?.res?.filter(medal => medal.name === str)[0].createdAt).toLocaleString().split(", ").join(" ");
	};

	return (
		<>
			<div className="space-y-2">
				<h2 className="text-xl font-medium text-center">İlk Armaları</h2>
				<div className="grid grid-cols-8 gap-4 w-full">
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
							<p>{ getMedalDate("firstLogin") }</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
				</div>
				<h2 className="text-xl font-medium text-center !mt-6">Birikim Armaları</h2>
				<div className="grid grid-cols-8 gap-4 w-full">
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
				</div>

				<h2 className="text-xl font-medium text-center !mt-6">Seviye Armaları</h2>
				<div className="grid grid-cols-8 gap-4 w-full">
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
					<Button className="h-auto flex flex-col cursor-default" disabled={!medal.includes("firstLogin")} variant="outline">
						<>
							<p className="text-lg font-medium">İlk Giriş</p>
							<div className="relative aspect-square w-full">
								<Image src={icon} alt="" fill />
							</div>
							<p>Hesaba ilk giriş</p>
						</>
					</Button>
				</div>
			</div>
		</>
	);
};