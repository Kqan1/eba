import { Label, Wrapper, Input, Icon } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/shadcn";

type Props = {
    setFormData: Dispatch<SetStateAction<{
        email: string;
        password: string;
        username: string;
    }>>
    formData: {
        email: string;
        password: string;
        username: string;
    };
    stage: number;
};

export function Stage2({setFormData, formData, stage }: Props) {

    function checkAlphabetic(str: string): boolean {
        return /[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(str);
    };

    function checkSpecialCharacters(str: string): boolean {
        const regex = /^(?!.*@)[a-zA-Z0-9_.-çğıöşüÇĞİÖŞÜ]*$/;
        return regex.test(str);
    };

    return (
        <div className="flex flex-col justify-end w-1/4 space-y-3">
            
            <h2 className="xs:pb-10 text-center font-bold xs:text-lg text-base">
                Dikkat Çekmek İçin Havalı Bir Kullanıcı Adı Gerekir.
                Hadi Sana En Uygun Kullanıcı Adını Belirleyelim!
            </h2>

            <div>
                <p className="font-semibold text-gray-700/90 dark:text-gray-200/90">Kullanıcı Adı Şartları:</p>
                <p className={cn(formData.username.length >= 4 ? "text-green-700 dark:text-green-500 before:content-['✓'] before:mr-2" : "text-red-600 dark:text-red-500 before:content-['X'] before:mr-2", "font-medium text-sm xs:text-base transition-all duration-200")}>
                    En az 4 karakterden oluşmalı.
                </p>
                <p className={cn(formData.username.length <= 30 ? "text-green-700 dark:text-green-500 before:content-['✓'] before:mr-2" : "text-red-600 dark:text-red-500 before:content-['X'] before:mr-2", "font-medium text-sm xs:text-base transition-all duration-200")}>
                    En fazla 30 karakterden oluşmalı.
                </p>
                <p className={cn(checkAlphabetic(formData.username) ? "text-green-700 dark:text-green-500 before:content-['✓'] before:mr-2" : "text-red-600 dark:text-red-500 before:content-['X'] before:mr-2", "font-medium text-sm xs:text-base transition-all duration-200")}>
                    En az 1 Harf İçermeli.
                </p>
                <p className={cn(checkSpecialCharacters(formData.username) && Array.from(formData.username)[0] !== "_" && Array.from(formData.username)[0] !== "." ? "text-green-700 dark:text-green-500 before:content-['✓'] before:mr-2" : "text-red-600 dark:text-red-500 before:content-['X'] before:mr-2", "font-medium text-sm xs:text-base transition-all duration-200")}>
                    (.), (_), Dışında Özel Karakter İçermemeli ve Onlarla Başlamamalı.
                </p>
            </div>
            <Wrapper Size="full">
                <Input
                    variant="icon"
                    type="text"
                    value={formData.username}
                    onChange={ e =>
                        setFormData((prevData) => ({
                            ...prevData,
                            username: e.target.value
                        }))
                    }
                    className="font-mono"
                    tabIndex={stage === 2 ? 0 : -1}
                    pattern="/^(?=.*[a-zA-Z])[a-zA-Z0-9_.-]{3,30}$/"
                    id="username"
                />
                <Icon><svg className="fill-gray-700/50 dark:fill-gray-200/70" height="16" width="16" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg></Icon>
                <Label htmlFor="username">Kullanıcı Adı</Label>
            </Wrapper>
        </div>
    );
};