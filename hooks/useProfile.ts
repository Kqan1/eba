export default async function useProfile(id: string) {
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id
            }),
        });
        const res = await response.json();
        return [ res[0], null ] as const
    } catch (error) {
        return [ null, error ] as const
    }
};