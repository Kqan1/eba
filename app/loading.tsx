import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 h-full">
            <Spinner size={32} />
            <p>EBA Yükleniyor...</p>
        </div>
    );
};