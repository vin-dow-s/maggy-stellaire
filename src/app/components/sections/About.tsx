import Image from "next/image"
import Link from "next/link"

const About = () => {
    return (
        <section
            id="a-propos-section"
            className="body-text flex flex-col lg:w-[75%] sm:w-[90%] w-[95%] mx-auto justify-center items-center sm:mt-96 mt-64 px-4"
        >
            <h2
                id="a-propos"
                className="text-4xl sm:text-5xl font-heading mb-8 sm:mb-24"
            >
                À propos
            </h2>
            <div className="flex flex-col xl:flex-row gap-12">
                <div className="flex flex-col gap-4 lg:gap-8 text-center items-center ">
                    <Image
                        src="/assets/maggy-seance.png"
                        alt="Maggy seance énergétique"
                        className="rounded-2xl"
                        width={225}
                        height={479}
                    />
                    <div className="text-gray-300 text-sm  flex flex-col gap-2">
                        <p>“Petite étoile, tu seras un phare dans la nuit…”</p>
                        <p className="text-xs">
                            (reçu en canalisation lorsque j’avais 12 ans)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-fit md:w-[768px] max-lg:mt-8">
                    <p className="text-xl ">Qui suis-je ?</p>
                    <p className="text-lg font-semibold mb-4">
                        Une âme et un cœur en connexion avec l’univers pour vous
                        aider.
                    </p>
                    <p>
                        J’ai commencé à voir les défunts à la maternelle où je
                        ne comprenais pas pourquoi mes copains et copines ne les
                        voyaient pas... A onze ans et demi, je faisais mes
                        premiers tirages de cartes (jeu de 32) et les copines me
                        disaient « tu te rappelles ce que tu m’avais dit, et
                        bien c’est arrivé »...{" "}
                    </p>
                    <p>
                        C’est comme cela que j’ai compris…{" "}
                        <span className="font-semibold">ma différence.</span>
                    </p>
                    <p>
                        À 14 ans, mon magnétisme s’est amplifié, me permettant
                        d’apaiser mes proches, de les calmer et même de les
                        aider à dormir. Adulte, j’ai enrichi ma pratique avec la
                        lithothérapie, la sonothérapie et l’hypnose
                        ericksonienne pour offrir un accompagnement encore plus
                        complet.
                    </p>
                    <p className="my-4">
                        <span className="font-semibold">
                            Ma mission d’âme : vous reconnecter aux énergies de
                            lumière. Je vous aide à lever les blocages et à
                            trouver en vous les ressources nécessaires pour
                            avancer en confiance.
                        </span>
                    </p>
                    <p>
                        Chaque séance est une porte ouverte vers un meilleur
                        alignement et une vie plus claire.
                    </p>
                    <p>
                        <span className="font-semibold">
                            Vous souhaitez une consultation personnalisée ?{" "}
                            <Link
                                href="mailto:maggy.stellaire@gmail.com"
                                className="text-primary underline"
                            >
                                Contactez-moi
                            </Link>{" "}
                            dès maintenant et discutons-en !
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
