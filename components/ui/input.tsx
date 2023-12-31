//! ------------- IMPORTS ---------- !//
import { InputHTMLAttributes, LabelHTMLAttributes, HTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/shadcn";
// import { getRandomValues } from "crypto";

//! ------------- WRAPPER ---------- !//
const WrapperVariants = cva(
    "relative font-normal"
    , {
    variants: {
        variant: {
            default: "",
        },
        Size: {
            default: "w-64 h-auto",
            full: "w-full h-auto",
        },
    },
    defaultVariants: {
        variant: "default",
        Size: "default",
    },
});

export interface WrapperProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof WrapperVariants> {}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
    ({ className, children, variant, Size, ...props }, ref) => {

        return (
            <div 
                className={cn(WrapperVariants({ variant, Size, className }))} 
                ref={ref}
                {...props}
            >
                { children }
            </div>
        );
    }
);

Wrapper.displayName = "Wrapper";

export { Wrapper, WrapperVariants };

//! ------------- INPUT ---------- !//
const inputVariants = cva(
    "peer/input p-2 text-zinc-700 dark:text-zinc-200 placeholder:font-normal placeholder:text-zinc-700 placeholder:dark:text-zinc-200 focus:border-2"
    , {
    variants: {
        variant: {
            default:
                "rounded-md border outline-none bg-transparent border-zinc-400/40 dark:border-zinc-50/20",
            light:
                "rounded-md border-2 outline-none bg-transparent border-zinc-900/20 dark:border-zinc-50/30",
            ghost: 
                "outline-none bg-transparent",
            icon:
                "rounded-md border outline-none bg-transparent border-zinc-400/40 dark:border-zinc-50/20 pl-7",
        },
        Size: {
            default: "w-full h-10",
            thin: "w-full h-7",
            xl: "w-full h-auto text-2xl px-4",
        },
    },
    defaultVariants: {
        variant: "default",
        Size: "default",
    },
});

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, children, variant, Size, ...props }, ref) => {
        return (
            <input
                className={cn(inputVariants({ variant, Size, className }))}
                placeholder=""
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export { Input, inputVariants };

//! ------------- LABEL ---------- !//
const LabelVariants = cva(
    "absolute left-2 top-1/2 px-1 pointer-events-none bg-zinc-50 dark:bg-zinc-900 text-zinc-700/80 dark:text-zinc-200/80 -translate-y-[130%] peer-placeholder-shown/input:-translate-y-1/2 transition-transform"
    , {
    variants: {
        variant: {
            default: "",
        },
        size: {
            default: "",
            full: "",
            thin: "",
            xl: "text-xl",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof LabelVariants> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, children, variant, size, ...props }, ref) => {

        return (
            <label
                className={cn(LabelVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                { children }
            </label>
        );
    }
);

Label.displayName = "Label";

export { Label, LabelVariants };

//! ------------- Icon ---------- !//
export interface IconProps extends HTMLAttributes<HTMLDivElement> {}

const Icon = forwardRef<HTMLDivElement, IconProps>(
    ({ className, children, ...props }, ref) => {

        return (
            <div
                className={cn("absolute top-1/2 -translate-y-1/2 left-2 fill-zinc-700/50", className )}
                ref={ref}
                {...props}
            >
                { children }
            </div>
        );
    }
);

Icon.displayName = "Icon";

export { Icon };