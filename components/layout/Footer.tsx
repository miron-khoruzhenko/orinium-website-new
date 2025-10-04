"use client"

import { useTranslations } from "next-intl"
import Logo from "../ui/Logo"
import { navLinks } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { socialLinks } from "@/config/contacts"

export default function Footer() {
  const t = useTranslations("common")

  const navigation = navLinks.map((link) => ({
    href: link.href,
    label: t(link.key),
  }))

  return (
    <footer className="bg-white border-t border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <div>
              <div className="font-display font-bold text-lg">{siteConfig.name}</div>
              <div className="text-xs text-gray-600">{siteConfig.copyright}</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navigation.map((link) => (
              <a key={link.href} href={link.href} className="text-sm hover:opacity-60 transition-opacity">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="text-xs font-bold">{social.icon[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
