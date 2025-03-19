"use client"

import { cn } from "@/lib/utils"
import { ButtonVariant } from "@/lib/utils/buttonStyles"
import { useState } from "react"
import Button from "./Button"
import CheckIcon from "./CheckIcon"

type ModeOption = {
    label: string
    price: number
    points: string[]
}

type ServiceCardProps = {
    title: string
    variant: ButtonVariant
    subtitle?: string
    modes?: {
        [key: string]: ModeOption
    }
    defaultMode?: string
}

const ServiceCard = ({
    title,
    variant,
    modes,
    defaultMode,
}: ServiceCardProps) => {
    const [selectedMode, setSelectedMode] = useState<string | undefined>(
        defaultMode
    )

    if (!modes || !selectedMode) return null

    const currentPoints = modes[selectedMode].points
    const currentPrice = modes[selectedMode].price

    // Get the gradient class based on variant for header (no hover effect)
    const headerGradientClass = `gradient-header-${variant}`

    return (
        <div
            className="rounded-2xl w-full flex flex-col justify-between min-h-[37em] md:min-h-[30em] overflow-hidden shadow-2xl"
            style={{
                backgroundColor: "var(--color-primary-darker)",
                border: `1px solid #211c30`,
            }}
        >
            {/* Card Header with Gradient - No hover effect */}
            <div
                className={`p-6 pt-2 text-center relative ${headerGradientClass}`}
            >
                {/* Mode Switch */}
                {modes && Object.keys(modes).length > 1 ? (
                    <div className="flex justify-center mt-2 mb-10">
                        <div className="flex bg-black/20 rounded-full p-1 backdrop-blur-sm">
                            {Object.entries(modes).map(([mode, option]) => (
                                <button
                                    key={mode}
                                    onClick={() => setSelectedMode(mode)}
                                    className={cn(
                                        "px-3 py-1 text-xs rounded-full font-medium cursor-pointer",
                                        selectedMode === mode
                                            ? "bg-(--color-switch-on) text-white shadow-sm"
                                            : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center mt-2 mb-10">
                        <div className="px-2 py-1 bg-black/10 rounded-full backdrop-blur-sm">
                            <div className="px-2 py-1 text-xs rounded-full font-medium text-white/80">
                                {modes[selectedMode].label}
                            </div>
                        </div>
                    </div>
                )}
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-medium mb-6 text-white drop-shadow-sm">
                    {title}
                </h3>

                {/* Price */}
                <div className="mt-2 mb-4">
                    <h4 className="text-3xl sm:text-4xl">
                        <div className="flex items-center justify-center">
                            <div className="text-white">
                                {currentPrice}
                                <span className="text-base">€</span>
                            </div>
                        </div>
                    </h4>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-8 flex-1 flex flex-col gap-4">
                {/* Features List */}
                <ul className="gap-5 flex flex-col flex-1 mb-8 sm:mb-16">
                    {currentPoints.map((point, index) => (
                        <li
                            key={point}
                            className={cn(
                                "text-sm flex items-start gap-3",
                                variant === "energetique" &&
                                    selectedMode === "distance" &&
                                    index === currentPoints.length - 1 &&
                                    "text-gray-500"
                            )}
                        >
                            <CheckIcon
                                color={
                                    variant === "energetique" &&
                                    selectedMode === "distance" &&
                                    index === currentPoints.length - 1
                                        ? "var(--color-secondary)"
                                        : `var(--${variant}-from)`
                                }
                                className="mt-1 flex-shrink-0 w-4 h-4"
                            />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                    <Button
                        href="mailto:maggy.stellaire@gmail.com"
                        variant={variant}
                        className="w-full"
                    >
                        Réserver
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
