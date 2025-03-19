import { cn } from "@/lib/utils"
import { ButtonVariant, getButtonStyles } from "@/lib/utils/buttonStyles"
import Link from "next/link"

type ButtonProps = {
    variant: ButtonVariant
    href: string
    children: React.ReactNode
    className?: string
}

const Button = ({ variant, href, children, className }: ButtonProps) => {
    const { combinedClasses } = getButtonStyles(variant)

    return (
        <Link
            href={href}
            className={cn(
                combinedClasses,
                "flex justify-center text-center",
                className
            )}
        >
            {children}
        </Link>
    )
}

export default Button
