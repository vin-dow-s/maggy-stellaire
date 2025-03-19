export type ButtonVariant =
    | "cta"
    | "secondary"
    | "voyance"
    | "energetique"
    | "hypnose"

/**
 * Get button styles based on variant
 * @param variant Button variant
 * @returns Object containing base and variant-specific classes
 */
export const getButtonStyles = (variant: ButtonVariant) => {
    const baseClasses =
        "px-6 py-3 rounded-lg font-base focus:outline-none cursor-pointer font-main relative text-white shadow-2xl"

    let variantClasses = ""

    switch (variant) {
        case "cta":
            variantClasses =
                "gradient-voyance flex justify-center items-center gap-2 w-fit"
            break
        case "secondary":
            variantClasses =
                "bg-white text-black hover:bg-(--color-secondary) w-fit transition-colors font-medium"
            break
        case "voyance":
            variantClasses = "gradient-voyance w-full transition-all"
            break
        case "energetique":
            variantClasses = "gradient-energetique w-full transition-all"
            break
        case "hypnose":
            variantClasses = "gradient-hypnose w-full transition-all"
            break
        default:
            variantClasses =
                "bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/75"
            break
    }

    return {
        combinedClasses: `${baseClasses} ${variantClasses}`,
    }
}
