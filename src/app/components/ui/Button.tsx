import { ButtonVariant, getButtonStyles } from "@/lib/utils/buttonStyles"
import Link from "next/link"

type ButtonProps = {
    variant: ButtonVariant
    href: string
    children: React.ReactNode
}

const Button = ({ variant, href, children }: ButtonProps) => {
    const { combinedClasses } = getButtonStyles(variant)

    return (
        <Link href={href} className={`${combinedClasses} flex justify-center text-center`}>
             {children}
        </Link>
    )
}

export default Button