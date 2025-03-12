import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Button from "./components/ui/Button"

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <div className="flex flex-col justify-center items-center gap-6 mt-96 mb-64">
                <p className="text-sm sm:text-base font-main">
                    Vous avez des questions ou souhaitez réserver une
                    consultation ?
                </p>
                <Button href="/contact" variant="secondary">
                    Contactez-moi
                </Button>
            </div>
        </>
    )
}
