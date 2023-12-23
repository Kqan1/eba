import { useState } from "react";
import { BellElectric } from "lucide-react";

export default function Notifications() {
    const [notificationsMenuState, setNotificationsMenuState] = useState<boolean>(false)

    return (
        <button className="">
            <BellElectric width={22} height={22}/>
        </button>
    );
};