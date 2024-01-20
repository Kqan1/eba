import { AlertTriangle } from "lucide-react";

export default function ProfileError() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <AlertTriangle className="stroke-gray-600 dark:stroke-gray-400" size={32} />
            <p>Bir Sorun Oluştu</p>
        </div>
    );
};