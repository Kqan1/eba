"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Wrapper } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import IconGoogle from '@/public/logos/google.svg'

const LoginForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/myaccount";
    const router = useRouter();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                redirect: false,
                username,
                password,
                callbackUrl,
            });
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError(true);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const [passwordInputType, setPasswordInputType] = useState<string>("password");

    function handleSeePasword(){
        if (passwordInputType === "password") {
            setPasswordInputType("text");
        } else {
            setPasswordInputType("password");
        }
    }

    return (
        <form
            className="flex flex-col items-center w-full px-4 xs:px-8 space-y-3 mt-8 sm:mt-0"
            onSubmit={onSubmit}
        >
            <div className="w-full">
                <Wrapper Size="full">
                    <Input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        id="username"
                        aria-labelledby="username-label"
                        required
                        autoComplete="username"
                    />
                    <Label htmlFor="username" id="username-label">Kullanıcı Adı</Label>
                </Wrapper>
            </div>
            
            <div className="w-full">
                <Wrapper Size="full">
                    <Input
                        type={passwordInputType}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        id="password"
                        aria-labelledby="password-label"
                        required
                        autoComplete="password"
                    />
                    <Label htmlFor="password" id="password-label">Şifre</Label>
                    <button 
                        className="absolute top-1/2 right-3 -translate-y-1/2"
                        type="button"
                        onClick={handleSeePasword}
                        aria-label="show password"
                    >
                        { passwordInputType === "password" ?
                            <svg className="fill-zinc-700 dark:fill-zinc-200" height="17" width="19" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                        :   <svg className="fill-zinc-700 dark:fill-zinc-200" height="17" width="19" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm-139.9 12c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8L83.1 161.5zm-50 86.3c-1.8 6.8-1.3 14 1.4 20.5c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8z"/></svg>
                        }
                    </button>
                </Wrapper>
            </div>
            
            <Button type="submit" variant={error ? "destructive" : "default"} className="w-full">{ error ? "E-posta veya Şifre Hatalı" : "Giriş Yap" }</Button>

            <p className="relative font-semibold after:content-[''] after:absolute after:top-1/2 after:translate-y-1/2 after:w-4 after:border-b after:border-zinc-700/50 before:content-[''] before:absolute before:top-1/2 before:right-full before:translate-y-1/2 before:w-4 before:border-b before:border-zinc-700/50">
                &nbsp;Ya da&nbsp;
            </p>

            <Button type="submit" className="w-full space-x-1">
                <Image src={IconGoogle} alt="Google" height={24} width={24}/>
                <p>&nbsp;Google ile Devam Et</p>
            </Button>

            <span className="text-center">
                Henuz Hesabın Yok mu? &nbsp;
                <Link href="/signup" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-semibold transition-colors whitespace-nowrap">
                    Hemen Kayıt Ol!
                </Link>
            </span>
            <Button variant="link">
                Sadece Bi&apos; Bakıp Çıkacacağım
            </Button>
        </form>
    );
};

export default LoginForm;