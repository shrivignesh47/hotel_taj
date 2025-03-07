"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from './BlurText/BlurText'; // Import BlurText component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#121414] px-3 py-1">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/Assests/taj.png"
                            alt="Hotel Taj Logo"
                            width={80}
                            height={1}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-[#d2a260] hover:text-[#d2a260]/80">
                        <BlurText text="Home" delay={150} animateBy="words" direction="top" />
                    </Link>
                    <Link href="/About" className="text-[#d2a260] hover:text-[#d2a260]/80">
                        <BlurText text="About" delay={150} animateBy="words" direction="top" />
                    </Link>
                    <Link href="/Menu" className="text-[#d2a260] hover:text-[#d2a260]/80">
                        <BlurText text="Menu" delay={150} animateBy="words" direction="top" />
                    </Link>
                    <Link href="/Contact" className="text-[#d2a260] hover:text-[#d2a260]/80">
                        <BlurText text="Contact" delay={150} animateBy="words" direction="top" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#d2a260]"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#121414] z-50 flex flex-col items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-[#d2a260] text-2xl"
                    >
                        &times;
                    </button>
                    <div className="flex flex-col items-center space-y-8">
                        <Link
                            href="/"
                            className="text-[#d2a260] text-2xl hover:text-[#d2a260]/80"
                            onClick={() => setIsOpen(false)}
                        >
                            <BlurText text="Home" delay={150} animateBy="words" direction="top" />
                        </Link>
                        <Link
                            href="/About"
                            className="text-[#d2a260] text-2xl hover:text-[#d2a260]/80"
                            onClick={() => setIsOpen(false)}
                        >
                            <BlurText text="About" delay={150} animateBy="words" direction="top" />
                        </Link>
                        <Link
                            href="/Menu"
                            className="text-[#d2a260] text-2xl hover:text-[#d2a260]/80"
                            onClick={() => setIsOpen(false)}
                        >
                            <BlurText text="Menu" delay={150} animateBy="words" direction="top" />
                        </Link>
                        <Link
                            href="/Contact"
                            className="text-[#d2a260] text-2xl hover:text-[#d2a260]/80"
                            onClick={() => setIsOpen(false)}
                        >
                            <BlurText text="Contact" delay={150} animateBy="words" direction="top" />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;