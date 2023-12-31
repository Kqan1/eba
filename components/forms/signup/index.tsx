"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { z } from "zod";

import { Stage1 } from "./stage1";
import { Stage2 } from "./stage2";
import { Stage3 } from "./stage3";
import { Stage4 } from "./stage4";
import Link from "next/link";

export default function SigninForm() {
    const [progress, setProgress] = useState<string>("-translate-x-full");
    const [stage, setStage] = useState<number>(1);
    const [stageTranslate, setStageTranslate] = useState<string>("");
    const [response, setResponse] = useState({ 
        user: null, 
        message: "",
        status: "loading"
    });
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: ""
    });
    const [emailError, setEmailError] = useState<null | string>(null);
    const [passwordError, setPasswordError] = useState<null | string>(null);


    const [stage1Passed, setStage1Passed] = useState<boolean>(false);
    const [stage2Passed, setStage2Passed] = useState<boolean>(false);

    const emailSchema = z.string().email('Geçerli bir email giriniz')
    const passwordSchema = z.string().min(6, 'Parola en az 6 karakter olmalıdır')

    const usernameSchema = z.string()
        .min(4, 'En az 4 karakter olmalıdır')
        .max(30, 'En fazla 30 karakter olmalıdır')
        .regex(/^(?!.*@)(?=.*[a-zA-Z])[a-zA-ZçğıöşüÇĞİÖŞÜıİ][a-zA-Z0-9_.-çğıöşüÇĞİÖŞÜıİ]*$/, 'Geçerli bir kullanıcı adı giriniz');

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                previusStage();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    });

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            if (emailSchema.parse(formData.email) && !stage1Passed){
                setEmailError(null);
                if (passwordSchema.parse(formData.password) && !stage1Passed){
                    setStage1Passed(true);
                    setPasswordError(null);
                    nextStage();
                };
            } else if (usernameSchema.parse(formData.username) && !stage2Passed){
                nextStage();
                setStage2Passed(true);
            } else if (stage === 3) {
                nextStage();
                register();
            }
        } catch (err: any) {
            for (let i = 0; i < err.errors.length; i++) {
                if (err.errors[i].validation === "email"){
                    setEmailError(err.errors[i].message);
                };
                if (err.errors[i].message === "Parola en az 6 karakter olmalıdır"){
                    setPasswordError(err.errors[i].message);
                };
            };
        };
    };

    async function register(){
        try {
            const response = await fetch("/api/auth/register/", {
                method: "POST",
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                }),
            });
            const res = await response.json();
            setResponse(res);
        } catch (error) {
            console.log(error);
        };
    };

    //? Go next stage
    function nextStage() {
        if (stage < 4) {
            setStage((prevstage) => prevstage + 1);
            updateStageAnimation(stage + 1);
        };
    };

    //? Go Previus Stage
    function previusStage() {
        if (stage > 1) {
            setStage((prevstage) => prevstage - 1);
            updateStageAnimation(stage - 1);
        };
        if      (stage === 2) setStage1Passed(false);
        else if (stage === 3) setStage2Passed(false);
    };

    //? Update Stage Animation and Position
    function updateStageAnimation(nextStage: number) {
        let nextProgress: string = "";
        if (nextStage === 1) {
            nextProgress = "-translate-x-full";
            setStageTranslate("");
        } else if (nextStage === 2) {
            nextProgress = "-translate-x-2/3";
            setStageTranslate("-translate-x-1/4");
        } else if (nextStage === 3) {
            nextProgress = "-translate-x-1/3";
            setStageTranslate("-translate-x-2/4");
        } else if (nextStage === 4) {
            nextProgress = "-translate-x-0";
            setStageTranslate("-translate-x-3/4");
        };
        setProgress(nextProgress);
    };

    return (
        <form
            className="flex flex-col space-y-3 w-full overflow-x-hidden"
            onSubmit={onSubmit}
            autoComplete="off"
        >
            <div className={`flex w-[calc(400%)] transition-transform ${stageTranslate}`}>
                <Stage1
                    formData={formData}
                    setFormData={setFormData}
                    emailError={emailError}
                    passwordError={passwordError}
                    stage={stage}
                />
                <Stage2 
                    formData={formData}
                    setFormData={setFormData}
                    stage={stage}
                />
                <Stage3 
                    formData={formData}
                    stage={stage}
                />
                <Stage4 
                    stage={stage}
                    res={response}
                />
            </div>
            <Button 
                type="submit" 
                disabled={response.status === "error" && stage === 4 ? true : false}
                asChild={stage >= 4 && response.status === "success"}
            >
                { stage >= 4 ? 
                    response.status === "success" ? 
                    <Link href="/myarea">Keşfetmeye Başlayalım!</Link> : "Keşfetmeye Başlayalım!" : 
                    "Devam Et!" }
            </Button>
            <Button 
                variant="link" 
                type="button" 
                onClick={previusStage}
                className={stage >= 4 && response.status === "success" ? "hidden" : ""}
            >
                Geri Dön!
            </Button>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-2 overflow-hidden">
                <div className={`bg-gradient-to-r from-gray-700 to-gray-400 rounded-full h-full transition-all ${progress}`}></div>
            </div>
        </form>
    );
};

// router.push("/myarea");
