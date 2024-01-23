import type { User } from "next-auth";

type Medals = {
    res: {
        id: string;
        name: string;
        createdAt: Date;
        userId: string;
    }[];
    count: number;
}

export default async function useProfile(id: string) {
    try {
        const ProfileResponse= await fetch(`${process.env.NEXTAUTH_URL}/api/profile`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id
            })
        });
        const profile: User = await ProfileResponse.json().then(res=>res[0]);

        const medalsResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/profile/medals`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id
                })
            });
            const medals: Medals = await medalsResponse.json();

        return [ profile, medals, null ] as const;
    } catch (error) {
        return [ null, null, error ] as const;
    };
};