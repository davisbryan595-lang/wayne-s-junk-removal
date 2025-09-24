"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wide-angle-hd-photo-of-a-snow-plow-clearing-a-resi.jpg"
          alt="Snow plow clearing driveway at dawn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent"></div>
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`text-white transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-30px]"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Professional Snow & Junk Removal
              <span className="block text-primary">You Can Trust</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed text-pretty">
              Fast, reliable, and affordable services for your home and business. From snow clearing to junk removal and
              furniture delivery - we handle it all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+13069601411"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 btn-shine hover-lift focus-ring"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 306-960-1411
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift focus-ring"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free Estimates</span>
              </div>
            </div>
          </div>

          {/* Right side - Service highlights */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
            }`}
          >
            <div className="grid gap-4">
              {[
                { title: "Snow Removal", desc: "Driveways, parking lots, walkways", icon: "❄️" },
                { title: "Junk Removal", desc: "Furniture, appliances, debris cleanup", icon: "🚛" },
                { title: "Furniture Delivery", desc: "Safe transport and setup", icon: "📦" },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="glass rounded-xl p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                      <p className="text-gray-300">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
