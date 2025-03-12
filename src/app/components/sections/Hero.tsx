import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io"
import Button from "../ui/Button"

const Hero = () => {
    return (
        <section className="hero flex flex-col lg:flex-row items-center justify-center w-full min-h-[100svh] bg-black pt-16 max-sm:px-1 max-lg:mb-32 lg:gap-16">
            {/* 🔍 SEO H1 */}
            <h1 className="sr-only">
                Voyante - Médium - Energéticienne | Consultations dans le
                sud-ouest (Bordeaux) ou en ligne.
            </h1>

            {/* Left Side: Text Content */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-lg:my-16">
                {/* Title */}
                <h2 className="text-[clamp(2.5rem,3vw,5rem)] max-md:text-[clamp(1.5rem,5vw,2.5rem)] font-regular text-white drop-shadow-xl leading-tight mb-8">
                    {" "}
                    Vous cherchez des réponses <br />
                    pour éclaircir votre situation ?
                </h2>

                {/* Subtitle */}
                <h3 className="text-[clamp(14px,1vw,1rem)] text-(--color-secondary) font-main mb-10 leading-relaxed sm:leading-6 max-md:mx-24 max-sm:mx-8">
                    Je transmets les messages des guides qui vous sont destinés{" "}
                    <br className="hidden sm:inline" />
                    pour vous aider sur votre chemin de vie et parcours d’âme.
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
                    src="/assets/maggy.jpeg"
                    alt="Maggy photo"
                    width={200}
                    height={200}
                    className="rounded-2xl max-lg:w-[150px] max-lg:h-[266.6px]"
                />
            </div>
        </section>
    )
}

export default Hero
