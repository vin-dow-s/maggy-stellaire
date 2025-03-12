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
        "px-6 py-3 rounded-lg font-base focus:outline-none cursor-pointer font-main relative"

    let variantClasses = ""
    switch (variant) {
        case "cta":
            variantClasses =
                "gradient-primary text-white flex justify-center items-center gap-2  w-fit"
            break
        case "secondary":
            variantClasses =
                "bg-gray-200 text-[var(--color-secondary)] hover:bg-gray-400 w-fit transition-colors"
            break
        case "voyance":
            variantClasses =
                "bg-(--color-button-voyance) text-white w-full hover:bg-(--color-voyance-hover) transition-colors"
            break
        case "energetique":
            variantClasses =
                "bg-(--color-button-energetique) text-white w-full hover:bg-(--color-energetique-hover) transition-colors"
            break
        case "hypnose":
            variantClasses =
                "bg-(--color-button-hypnose) text-white w-full hover:bg-(--color-hypnose-hover) transition-colors"
            break
        default:
            variantClasses =
                "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/75"
            break
    }

    return {
        baseClasses,
        variantClasses,
        combinedClasses: `${baseClasses} ${variantClasses}`,
    }
}
