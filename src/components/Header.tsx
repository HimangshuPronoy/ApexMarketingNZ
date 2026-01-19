"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10"
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
<Link href="/" className="flex items-center gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c75d33ad-f488-499b-b831-06c838af12bd/image-1768811327164.png?width=8000&height=8000&resize=contain" 
                alt="APEX Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white text-base sm:text-xl font-cormorant font-bold tracking-wide">APEX Marketing NZ</span>
          </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-gray-300 transition-colors">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="hidden md:block border border-white/50 text-white px-6 py-2.5 hover:bg-white/10 transition-colors"
        >
          Work With Us
        </Link>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-8 flex flex-col gap-6 absolute top-full left-0 right-0 h-screen overflow-y-auto backdrop-blur-md">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl border-b border-white/5 pb-2">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl border-b border-white/5 pb-2">About</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl border-b border-white/5 pb-2">Services</Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl border-b border-white/5 pb-2">Portfolio</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl border-b border-white/5 pb-2">Contact</Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 border border-white/50 text-white px-6 py-3 text-center text-lg hover:bg-white/10"
          >
            Work With Us
          </Link>
        </div>
      )}
    </motion.header>
  );
}
