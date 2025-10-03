"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Logo from "./Logo"
import LanguageDropdown from "./LanguageDropdown"
import { navLinks } from "@/config/navigation"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("common")

  const navigation = navLinks.map((link) => ({
    href: link.href,
    label: t(link.key),
  }))

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="font-display font-bold text-xl">ORINIUM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:opacity-60 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Dropdown */}
          <div className="hidden md:block">
            <LanguageDropdown />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-black transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`w-full h-0.5 bg-black transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-full h-0.5 bg-black transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black bg-white">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium hover:opacity-60"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
