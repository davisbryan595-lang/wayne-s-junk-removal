"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/wayneslogo.jpeg"
              alt="Wayne's Junk & Snow Removal Ltd"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-navy leading-tight">Wayne's Junk & Snow Removal Ltd</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13069601411"
              className="flex items-center space-x-2 text-navy hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1 306-960-1411</span>
            </a>
            <a
              href="tel:+13069601411"
              className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 btn-shine"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-navy hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-navy hover:text-primary font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <a
                  href="tel:+13069601411"
                  className="flex items-center space-x-2 px-3 py-2 text-navy hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 306-960-1411</span>
                </a>
                <a
                  href="mailto:waynesjunkremoval1@gmail.com"
                  className="flex items-center space-x-2 px-3 py-2 text-navy hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>waynesjunkremoval1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
