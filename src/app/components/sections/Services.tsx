import ServiceCard from "../ui/ServiceCard"

const Services = () => {
    const voyanceModes = {
        generale: {
            label: "Consultation générale",
            price: 70,
            points: [
                "Voyance en présentiel ou par téléphone",
                "Consultation générale : passé, présent, futur, vies antérieures",
                "Réponses à vos questions sur les domaines de votre choix",
                "Messages de l'univers pour votre chemin de vie",
            ],
        },
        domaine: {
            label: "Le domaine",
            price: 30,
            points: [
                "Voyance en présentiel ou par téléphone",

                "Réponses à vos questions sur un domaine précis",
            ],
        },
    }

    const energetiqueModes = {
        presentiel: {
            label: "En présentiel",
            price: 90,
            points: [
                "Rééquilibrage de vos chakras et de vos nadis (3 canaux énergétiques)",
                "Alignement de vos corps subtils (astral/émotionnel, éthérique, mental et spirituel)",
                "Suppression de vos blocages énergétiques",
                "Détente et bien sentir retrouvés",
                "Lithothérapie, sonothérapie, relaxation",
            ],
        },
        distance: {
            label: "À distance",
            price: 50,
            points: [
                "Rééquilibrage de vos chakras et de vos nadis (3 canaux énergétiques)",
                "Alignement de vos corps subtils (astral/émotionnel, éthérique, mental et spirituel)",
                "Suppression de vos blocages énergétiques",
                "Détente et bien sentir retrouvés",
                "Lithothérapie, sonothérapie, relaxation",
            ],
        },
    }

    const hypnoseModes = {
        presentiel: {
            label: "En présentiel",
            price: 50,
            points: [
                "Booster votre confiance en vous",
                "Soutien face au deuil, aux épreuves",
                "Réconfort dans la gestion des douleurs",
                "Apaisement des addictions",
                "Rencontre avec votre guide",
            ],
        },
    }

    return (
        <section
            id="services-section"
            className="body-text flex flex-col w-full max-w-[1200px] mx-auto justify-center items-center sm:mt-64 mt-32 px-4"
        >
            {" "}
            <h2
                id="services"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-24 "
            >
                Services
            </h2>
            <div className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                    title="Voyance pure"
                    variant="voyance"
                    modes={voyanceModes}
                    defaultMode="generale"
                />
                <ServiceCard
                    title="Séance énergétique"
                    variant="energetique"
                    modes={energetiqueModes}
                    defaultMode="presentiel"
                />
                <ServiceCard
                    title="Hypnose"
                    variant="hypnose"
                    modes={hypnoseModes}
                    defaultMode="presentiel"
                />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mt-6 text-center max-w-2xl">
                <p className="text-xs text-gray-400">
                    Selon votre situation, je vous proposerai ce qui vous
                    convient le mieux.
                </p>
                <p className="text-xs text-gray-400">
                    Ces services ne se substituent pas à l'avis d'un
                    professionnel de santé ou à un traitement médical.
                </p>
            </div>
        </section>
    )
}

export default Services
