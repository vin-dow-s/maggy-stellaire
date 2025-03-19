import { quicksand } from "@/lib/fonts"
import type { Metadata } from "next"
import Footer from "./components/sections/Footer"
import Navigation from "./components/sections/Navigation"
import "./globals.css"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
    title: "Voyante - Médium - Energéticienne • Maggy Stellaire",
    description:
        "Voyance, séance énergétique et hypnose ericksonienne avec Maggy, médium expérimentée. Recevez des réponses claires dès maintenant. Consultations à Bordeaux et en ligne.",
    keywords: [
        "voyante bordeaux",
        "medium bordeaux",
        "médium spirituel",
        "séance énergétique",
        "tirage en ligne",
        "passé présent futur",
        "consultation voyance en ligne",
        "consultation spirituelle en ligne",
        "hypnose",
        "hypnose ericksonienne",
        "hypnose bordeaux",
        "bien-être",
        "lithotherapie bordeaux",
        "lithotherapie",
        "sonothérapie",
        "sonothérapie bordeaux",
    ],
    openGraph: {
        title: "Voyante - Médium - Energéticienne • Maggy Stellaire",
        description:
            "Voyance, séance énergétique et hypnose ericksonienne avec Maggy, voyante et médium expérimentée. Recevez des réponses claires dès maintenant. Consultations à Bordeaux et en ligne.",
        url: SITE_URL,
        type: "website",
        images: [
            {
                url: `${SITE_URL}/assets/univers.png`,
                width: 1200,
                height: 630,
                alt: "Univers stellaire, messages de l'âme, voyance - Maggy Stellaire",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Voyante - Médium - Energéticienne • Maggy Stellaire",
        description:
            "Voyance, séance énergétique et hypnose ericksonienne avec Maggy, voyante et médium expérimentée. Recevez des réponses claires dès maintenant. Consultations à Bordeaux et en ligne.",
        images: [`${SITE_URL}/assets/univers.png`],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr" className={`${quicksand.variable} antialiased`}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#7D3BA9" />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/icons/favicon.ico" />
            </head>
            <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
