"use client"

import Link from "next/link"
import { useState } from "react"

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm h-24 ">
            <div className="flex justify-between items-center p-4 bg-(--color-primary-darker) w-[60%]   mx-auto my-4 rounded-2xl px-8">
                <Link
                    href="/"
                    className=" text-white font-light "
                    onClick={closeMenu}
                >
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl">
                                Maggy Stellaire
                            </h2>
                            <h3 className="text-[10px] sm:text-xs font-medium text-(--color-secondary)">
                                Voyante - Médium - Energéticienne
                            </h3>{" "}
                        </div>
                    </div>
                </Link>

                <div className="hidden md:flex ml-auto">
                    <div className="flex items-baseline gap-8">
                        <Link
                            href="/#services"
                            className="text-white hover:text-primary font-medium transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="/#a-propos"
                            className="text-white hover:text-primary font-medium transition-colors"
                        >
                            À propos
                        </Link>
                        <Link
                            href="mailto:maggy.stellaire@gmail.com"
                            className="text-white hover:text-primary font-medium transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="md:hidden ml-auto">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`${
                                isMenuOpen ? "hidden" : "block"
                            } h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className={`${
                                isMenuOpen ? "block" : "hidden"
                            } h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-(--color-secondary) backdrop-blur-sm mt-2 rounded-lg">
                    <Link
                        href="/#services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                        onClick={closeMenu}
                    >
                        Services
                    </Link>
                    <Link
                        href="/#a-propos"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                        onClick={closeMenu}
                    >
                        À propos
                    </Link>
                    <Link
                        href="mailto:maggy.stellaire@gmail.com"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
