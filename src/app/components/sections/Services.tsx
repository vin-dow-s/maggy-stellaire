import ServiceCard from "../ui/ServiceCard"

const Services = () => {
    // Define modes for voyance service
    const voyanceModes = {
        consultation: {
            label: "Consultation générale",
            price: 70,
            points: [
                "Libération de vos blocages énergétiques et harmonisation de vos chakras",
                "Libération karmique et transgénérationnelle",
                "Rééquilibrage et augmentation de votre taux vibratoire",
                "Aide à vaincre les différentes addictions et dépendances (Tabac, Alcool...)",
                "Accompagnement spirituel et émotionnel sur votre chemin de croissance et d'alignement divin",
            ],
        },
        domaine: {
            label: "Le domaine",
            price: 30,
            points: [
                "Analyse approfondie d'un domaine spécifique de votre vie",
                "Identification des blocages et des opportunités",
                "Conseils personnalisés pour avancer dans ce domaine",
                "Prédictions détaillées sur l'évolution de votre situation",
                "Suivi personnalisé pour maximiser vos chances de réussite",
            ],
        },
    }

    // Define modes for energetique service
    const energetiqueModes = {
        presentiel: {
            label: "En présentiel",
            price: 90,
            points: [
                "Tirages et interprétations des cartes du tarot en face à face",
                "Réponses à vos questions urgentes pour éclairer votre chemin",
                "Conseils personnalisés pour vous apporter la lumière sur chaque aspect de votre vie",
                "Accompagnement bienveillant sur votre chemin de vie",
                "Messages de l'univers pour votre mission d'âme",
            ],
        },
        distance: {
            label: "À distance",
            price: 30,
            points: [
                "Séance énergétique complète par visioconférence",
                "Tirages de cartes et interprétation à distance",
                "Conseils et guidance spirituelle personnalisés",
                "Suivi par message après la séance",
                "Flexibilité horaire pour s'adapter à votre emploi du temps",
            ],
        },
    }

    const hypnoseModes = {
        presentiel: {
            label: "En présentiel",
            price: 50,
            points: [
                "Purification et harmonisation (lieux personnels ou profesionnels)",
                "Libération des blocages énergétiques",
                "Boost énergétique (pour lancement de votre activité ou pour attirer la prospérité)",
                "Grande protection spirituelle (purification et mise sous protection du lieu)",
            ],
        },
    }

    return (
        <section
            id="services-section"
            className="body-text flex flex-col w-full max-w-[1300px] mx-auto justify-center items-center sm:my-64 my-32 px-4"
        >
            {" "}
            <h2
                id="services"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-16 "
            >
                Services
            </h2>
            <div className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                    title="Voyance"
                    variant="voyance"
                    modes={voyanceModes}
                    defaultMode="consultation"
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
            <div className="flex flex-col gap-2 justify-center items-center mt-4">
                <p className="text-xs sm:text-sm text-gray-400">
                    * Selon votre situation, je vous proposerai ce qui vous
                    convient le mieux.
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                    Ces services ne se substituent pas à l'avis d'un
                    professionnel de santé ou à un traitement médical.
                </p>
            </div>
        </section>
    )
}

export default Services
