import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to conditionally join class names together
 * Uses clsx for conditional classes and twMerge to handle Tailwind conflicts
 */
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
