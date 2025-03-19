import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io"
import Button from "../ui/Button"

const Hero = () => {
    return (
        <section className="hero flex flex-col lg:flex-row items-center justify-center w-full min-h-[100svh] bg-black pt-16 max-sm:px-1 max-lg:mb-32 lg:gap-16">
            {/* 🔍 SEO H1 */}
            <h1 className="sr-only">
                Voyante - Médium - Energéticienne | Consultations spirituelles à
                Bordeaux ou en ligne.
            </h1>

            {/* Left Side: Text Content */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-lg:my-16">
                {/* Title */}
                <h2 className="text-[clamp(2rem,2.7vw,4rem)] max-md:text-[clamp(1.5rem,5vw,2.5rem)] font-regular text-white drop-shadow-xl leading-tight mb-8">
                    Recevez les réponses dont vous
                    <br /> avez besoin pour votre situation
                </h2>

                {/* Subtitle */}
                <h3 className="text-[clamp(14px,1vw,1rem)] font-medium text-(--color-secondary) font-main mb-10 leading-relaxed sm:leading-6 max-md:mx-24 max-sm:mx-8">
                    J’éclaire votre chemin de vie grâce à la voyance et la
                    médiumnité,
                    <br className="max-sm:hidden" />
                    je vous libère des blocages avec l’énergétique et l’hypnose.
                </h3>

                {/* CTA */}
                <Button href="/#services" variant="cta">
                    Découvrir mes services
                    <IoIosArrowRoundForward className="w-6 h-6" />
                </Button>
            </div>

            {/* Right Side: Image (Shrinks Responsively) */}
            <div className="flex justify-center lg:justify-end">
                <Image
                    src="/assets/maggy1.png"
                    alt="Voyance, séance énergétique, hypnose ericksonienne. Consultations à Bordeaux et en ligne. Maggy Stellaire"
                    width={300}
                    height={300}
                    className="rounded-2xl max-lg:w-[200px] w-[275px]"
                />
            </div>
        </section>
    )
}

export default Hero
