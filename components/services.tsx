"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Snowflake, Truck, Package, Clock, DollarSign, CheckCircle } from "lucide-react"

const services = [
  {
    id: "snow-removal",
    title: "Snow Removal",
    icon: Snowflake,
    image: "/hd-action-shot-of-a-commercial-snow-plow-clearing-.jpg",
    benefits: ["Residential driveways & walkways", "Commercial parking lots", "24/7 emergency service"],
    timeframe: "Same day service",
    pricing: "Starting at $50 per visit",
    description: "Professional snow clearing for safe access to your property during winter months.",
  },
  {
    id: "junk-removal",
    title: "Junk Removal",
    icon: Truck,
    image: "/professional-crew-loading-household-junk-into-a-du.jpg",
    benefits: ["Furniture & appliance removal", "Construction debris cleanup", "Estate & garage cleanouts"],
    timeframe: "2-4 hours per job",
    pricing: "From $100 per load",
    description: "Complete junk removal and cleanup services for homes and businesses.",
  },
  {
    id: "furniture-delivery",
    title: "Furniture Delivery",
    icon: Package,
    image: "/two-delivery-professionals-handling-a-sofa-on-a-do.jpg",
    benefits: ["Safe furniture transport", "Assembly & setup included", "Protective wrapping & padding"],
    timeframe: "1-2 hours delivery",
    pricing: "$75-150 per delivery",
    description: "Reliable furniture delivery and setup with care and professionalism.",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From snow removal to junk cleanup and furniture delivery, we provide reliable services that keep your
            property clean, safe, and accessible year-round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={service.id}
                data-index={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium">Timeframe:</span>
                      </div>
                      <span className="text-muted-foreground">{service.timeframe}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="font-medium">Pricing:</span>
                      </div>
                      <span className="text-muted-foreground">{service.pricing}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:+13069601411"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 btn-shine focus-ring"
                  >
                    Get Quote Now
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-navy font-medium">Need a custom service?</span>
            <a href="tel:+13069601411" className="text-primary font-semibold hover:text-primary-dark transition-colors">
              Call us: +1 306-960-1411
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
