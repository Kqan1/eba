import ProfileAchievements from "@/components/layout/profile/achievements";
import ProfileError from "@/components/layout/profile/error";
import ProfileMain from "@/components/layout/profile/main";
import ProfileMedals from "@/components/layout/profile/medals";

type Props = { 
    params: { 
        getProfile: string; 
        act: string; 
    };
};

export default async function Act({ params }: Props) {
    switch (params.act) {
        case "main":
            return <ProfileMain params={params} />
        case "achivements":
            return <ProfileAchievements params={params} />
        case "medals":
            return <ProfileMedals params={params} />
        default:
            <ProfileError />
            break;
    };
};