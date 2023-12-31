import { Metadata } from "next";

import NotFoundComponent from "@/components/notFound";

export const metadata: Metadata = {
    title: "Arama Sonucunuz Bulunamadı! - EBA"
}

export default function NotFound() {
    return <NotFoundComponent />;
};