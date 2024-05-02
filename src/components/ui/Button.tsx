import { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utili"
import { cva ,type VariantProps} from "class-variance-authority"


const buttonVariant = cva("rounded-md ",{
    variants:{
        variant:{
            primary: "border-2 border-yellow-200 text-black  bg-white   ",
            secondary: "border-2 border-white  bg-black text-white ",
            danger: "border-none bg-red-500 text-white hover:bg-red-600 ",
            good: "border-none bg-green-500 text-white hover:bg-green-600 ",
            recipe: "border-none bg-orange-500 text-white hover:bg-orange-600 ",



        },
        size:{
            sm: "text-sm py-0 px-1",
            md: "text-base py-1 px-2",
            lg: "text-lg py-2 px-4"

        }
    },
    defaultVariants:{
        variant: "primary",
        size: "md"
    }


})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariant>{
    children:ReactNode
}
const Button=({className,children,variant,size,...props}:ButtonProps)=>{

    return <button  {...props} className={cn(buttonVariant({variant,size}))} >{children}</button>
}
Button.displayName = "Button"

export {Button}