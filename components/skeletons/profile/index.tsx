import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoadingSkeleton() {
    return (
        <>
            <div className="items-center space-x-2 ml-2 hidden md:flex">
                <Skeleton className="h-12 w-12 rounded-full"/>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-32 rounded"/>
                    <Skeleton className="h-4 w-16 rounded"/>
                </div>
            </div>
            <div className="block md:hidden ml-2">
                <Skeleton className="h-10 w-24 rounded-md"/>
            </div>
        </>
    );
};