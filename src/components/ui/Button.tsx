import { ButtonHTMLAttributes, ReactNode } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}
const Button=({children,...props}:ButtonProps)=>{

    return <button  {...props} className="border border-yellow-200 rounded bg-red-300">{children}</button>
}

export {Button}