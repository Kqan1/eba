import { redirect } from "next/navigation";

export default async function Act({ params }: { params: { getProfile: string; act: string; } }) {
    redirect(`/profile/${params.getProfile}/main`);
};