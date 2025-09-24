"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Calendar, Truck, CheckCircle, Star } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Call or Contact Us",
    description: "Reach out via phone, email, or our contact form to discuss your needs.",
    icon: Phone,
    color: "from-primary to-primary-dark",
  },
  {
    id: 2,
    title: "Free Estimate",
    description: "We provide a detailed, no-obligation quote for your project.",
    icon: Calendar,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Schedule Service",
    description: "Choose a convenient time that works with your schedule.",
    icon: Calendar,
    color: "from-teal-500 to-teal-600",
  },
  {
    id: 4,
    title: "Professional Service",
    description: "Our experienced team arrives on time with proper equipment.",
    icon: Truck,
    color: "from-primary to-primary-dark",
  },
  {
    id: 5,
    title: "Quality Completion",
    description: "We complete the job efficiently and clean up after ourselves.",
    icon: CheckCircle,
    color: "from-green-500 to-green-600",
  },
  {
    id: 6,
    title: "Your Satisfaction",
    description: "We ensure you're completely satisfied with our work.",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
  },
]

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => [...prev, stepIndex])
          }
        })
      },
      { threshold: 0.3 },
    )

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]")
    stepElements?.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our streamlined process ensures you get professional service with minimal hassle. From initial contact to
            job completion, we make it simple.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary transform -translate-y-1/2 z-0"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = visibleSteps.includes(index)

              return (
                <div
                  key={step.id}
                  data-step={index}
                  className={`text-center transition-all duration-700 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover-lift`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us today for your free estimate and experience our professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13069601411"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 btn-shine focus-ring"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 306-960-1411
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-navy font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 focus-ring"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
