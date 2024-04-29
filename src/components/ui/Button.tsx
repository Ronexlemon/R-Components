import { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utili"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}
const Button=({children,...props}:ButtonProps)=>{

    return <button  {...props} className="border-2 border-yellow-200  rounded  py-1 px-2">{children}</button>
}

export {Button}