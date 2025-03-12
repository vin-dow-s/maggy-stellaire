import { quicksand } from "@/lib/fonts"
import type { Metadata } from "next"
import Footer from "./components/sections/Footer"
import Navigation from "./components/sections/Navigation"
import "./globals.css"

export const metadata: Metadata = {
    title: "Maggy Stellaire • Voyante - Médium - Energéticienne",
    description:
        "Voyante - Médium - Energéticienne | Je transmets les messages des guides qui vous sont destinés pour vous aider sur votre chemin de vie et parcours d’âme. Consultations dans le sud-ouest (Bordeaux) ou en ligne.",
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
