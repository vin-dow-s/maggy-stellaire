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

const variantToList = {
    voyance: {
        points: [
            "Libération de vos blocages énergétiques et harmonisation de vos chakras",
            "Libération karmique et transgénérationnelle",
            "Rééquilibrage et augmentation de votre taux vibratoire",
            "Aide à vaincre les différentes addictions et dépendances (Tabac, Alcool...)",
            "Accompagnement spirituel et émotionnel sur votre chemin de croissance et d'alignement divin",
        ],
    },
    energetique: {
        points: [
            "Tirages et interprétations des cartes du tarot",
            "Réponses à vos questions urgentes pour éclairer votre chemin",
            "Conseils personnalisés pour vous apporter la lumière sur chaque aspect de votre vie",
            "Accompagnement bienveillant sur votre chemin de vie",
            "Messages de l'univers pour votre mission d'âme",
        ],
    },
    hypnose: {
        points: [
            "Purification et harmonisation (lieux personnels ou profesionnels)",
            "Libération des blocages énergétiques",
            "Boost énergétique (pour lancement de votre activité ou pour attirer la prospérité)",
            "Grande protection spirituelle (purification et mise sous protection du lieu)",
        ],
    },
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

    let color = ""
    switch (variant) {
        case "voyance":
            color = "--color-voyance"
            break
        case "energetique":
            color = "--color-energetique"
            break
        case "hypnose":
            color = "--color-hypnose"
            break
        default:
            color = "--color-primary"
    }

    // Get the current points and price based on the selected mode or fallback to default
    const currentPoints =
        modes && selectedMode && modes[selectedMode]
            ? modes[selectedMode].points
            : variantToList[variant as keyof typeof variantToList].points

    const currentPrice =
        modes && selectedMode && modes[selectedMode]
            ? modes[selectedMode].price
            : 50

    return (
        <div
            className={`rounded-xl shadow-md w-full p-8 pt-4 flex flex-col justify-between`}
            style={{
                backgroundColor: `var(${color})`,
                boxShadow: `1px 3px 5px 0 var(${color})`,
            }}
        >
            <div className="text-center">
                {/* Mode Switch */}
                {modes && Object.keys(modes).length > 1 ? (
                    <div className="flex justify-center mb-6">
                        <div className="flex  bg-(--color-switch-off) rounded-full  cursor-pointer">
                            {Object.entries(modes).map(([mode, option]) => (
                                <button
                                    key={mode}
                                    onClick={() => setSelectedMode(mode)}
                                    className={cn(
                                        "px-4 py-2 text-xs rounded-full transition-all  cursor-pointer font-medium",
                                        selectedMode === mode
                                            ? "bg-(--color-switch-on)  "
                                            : " text-(--color-secondary) hover:text-white"
                                    )}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center mb-6">
                        <div className="flex p-1 bg-(--color-switch-off) rounded-full">
                            <button
                                className={cn(
                                    "px-3 py-1 text-xs rounded-full transition-all font-medium text-(--color-secondary) "
                                )}
                            >
                                En présentiel
                            </button>
                        </div>
                    </div>
                )}
                <div className="mb-10">
                    <h3 className="text-2xl sm:text-3xl">{title}</h3>
                </div>

                <div className="mt-auto flex justify-center min-h-[3.5rem] mb-10">
                    {currentPrice !== undefined && (
                        <h4 className="text-3xl sm:text-4xl font-heading">
                            <div className="flex items-center justify-center">
                                <div>
                                    {currentPrice}
                                    <span className="text-sm">€</span>
                                </div>
                            </div>
                        </h4>
                    )}
                </div>
            </div>
            <ul className="gap-4 flex flex-col flex-1 px-0 p-0">
                {currentPoints.map((point) => (
                    <li
                        key={point}
                        className="text-xs sm:text-sm flex items-start gap-2"
                    >
                        <CheckIcon
                            color="white"
                            className="mt-1 sm:mt-1.5 ml-[-1rem] flex-shrink-0"
                        />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center mt-16 ">
                <div className="w-full">
                    <Button href="/contact" variant={variant}>
                        Contactez-moi
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
