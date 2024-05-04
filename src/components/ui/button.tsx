import { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utili"
import { cva ,type VariantProps} from "class-variance-authority"
import React from "react"
import { Slot } from "@radix-ui/react-slot"


const buttonVariants = cva("rounded-md ",{
    variants:{
        variant:{
            primary: "border-2 border-yellow-200 text-black  bg-white   ",
            secondary: "border-2 border-white  bg-black text-white ",
            danger: "border-none bg-red-500 text-white hover:bg-red-600 ",
            good: "border-none bg-green-500 text-white hover:bg-green-600 ",
            recipe: "border-none bg-orange-500 text-white hover:bg-orange-600 ",
            outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",



        },
        size:{
            sm: "text-sm py-0 px-1",
            md: "text-base py-1 px-2",
            lg: "text-lg py-2 px-4",
            icon: "h-10 w-10",

        }
    },
    defaultVariants:{
        variant: "primary",
        size: "md"
    }


})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }