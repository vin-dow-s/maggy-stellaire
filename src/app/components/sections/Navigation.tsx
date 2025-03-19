"use client"

import { cn } from "@/lib/utils"
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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 h-24 transition-all duration-300 py-4 `}
        >
            <div className="flex justify-between items-center w-[90%] lg:w-[70%] shadow-2xl max-w-6xl mx-auto rounded-2xl px-6 py-3 bg-(--color-primary-darker)">
                <Link
                    href="/"
                    className="text-[var(--navbar-text)] font-light transition-all duration-300"
                    onClick={closeMenu}
                >
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-medium">
                                Maggy Stellaire
                            </h2>
                            <h3 className="text-xs font-medium text-[var(--color-secondary)]">
                                Voyante - Médium - Energéticienne
                            </h3>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex ml-auto">
                    <div className="flex items-baseline gap-8">
                        <NavLink href="/#services" onClick={closeMenu}>
                            Services
                        </NavLink>
                        <NavLink href="/#a-propos" onClick={closeMenu}>
                            À propos
                        </NavLink>
                        <NavLink
                            href="mailto:maggy.stellaire@gmail.com"
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden ml-auto">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-[var(--navbar-text)] focus:outline-none transition-colors"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
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
                            className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
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
            {isMenuOpen && (
                <div className="md:hidden w-[90%] mx-auto mt-2 overflow-hidden rounded-xl">
                    <div className="nav-blur bg-[var(--navbar-bg)] nav-shadow py-2">
                        <NavLink href="/#services" mobile onClick={closeMenu}>
                            Services
                        </NavLink>
                        <NavLink href="/#a-propos" mobile onClick={closeMenu}>
                            À propos
                        </NavLink>
                        <NavLink
                            href="mailto:maggy.stellaire@gmail.com"
                            mobile
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

// Reusable NavLink component
const NavLink = ({
    href,
    children,
    mobile = false,
    onClick,
}: {
    href: string
    children: React.ReactNode
    mobile?: boolean
    onClick?: () => void
}) => {
    return (
        <Link
            href={href}
            className={cn(
                "text-[var(--navbar-text)] transition-all duration-300 font-medium w-fit",
                !mobile &&
                    "relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300",
                mobile && "block px-6 py-3"
            )}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}

export default Navigation
