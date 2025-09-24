"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Clock, DollarSign, CheckCircle } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Commercial Snow Removal Contract",
    client: "Downtown Shopping Center",
    image: "/placeholder.svg?height=300&width=500",
    problem:
      "Large shopping center needed reliable 24/7 snow removal to maintain customer access during heavy winter storms.",
    solution:
      "Implemented comprehensive snow management plan with priority clearing schedule, salt application, and emergency response protocols.",
    result:
      "Maintained 100% accessibility throughout winter season, increased customer satisfaction, and renewed contract for 3 additional years.",
    metrics: {
      timeframe: "4-month contract",
      savings: "30% cost reduction",
      satisfaction: "100% uptime",
    },
  },
  {
    id: 2,
    title: "Estate Cleanout & Preparation",
    client: "Residential Estate Sale",
    image: "/placeholder.svg?height=300&width=500",
    problem: "Family needed complete estate cleanout of 3,000 sq ft home within tight timeline for property sale.",
    solution:
      "Coordinated full-service cleanout including furniture removal, debris disposal, and deep cleaning preparation for staging.",
    result: "Completed cleanout 2 days ahead of schedule, property sold within 1 week of listing at asking price.",
    metrics: {
      timeframe: "3-day completion",
      savings: "15% faster sale",
      satisfaction: "5-star review",
    },
  },
  {
    id: 3,
    title: "Multi-Location Furniture Delivery",
    client: "New Office Complex",
    image: "/placeholder.svg?height=300&width=500",
    problem:
      "New business needed coordinated furniture delivery and setup across 5 office locations within 2-day window.",
    solution:
      "Developed logistics plan with dedicated teams, protective equipment, and assembly specialists for each location.",
    result:
      "All locations fully furnished on schedule, business opened on time, established ongoing delivery partnership.",
    metrics: {
      timeframe: "2-day delivery",
      savings: "25% vs competitors",
      satisfaction: "Ongoing contract",
    },
  },
]

export default function CaseStudies() {
  const [visibleStudies, setVisibleStudies] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const studyIndex = Number.parseInt(entry.target.getAttribute("data-study") || "0")
            setVisibleStudies((prev) => [...prev, studyIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const studies = sectionRef.current?.querySelectorAll("[data-study]")
    studies?.forEach((study) => observer.observe(study))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="case-studies" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real projects, real results. See how we've helped businesses and homeowners solve their challenges with
            professional, reliable service.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const isVisible = visibleStudies.includes(index)
            const isEven = index % 2 === 0

            return (
              <div
                key={study.id}
                data-study={index}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                } ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover-lift">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Case Study
                    </span>
                    <h3 className="text-3xl font-bold text-navy mb-2">{study.title}</h3>
                    <p className="text-lg text-primary font-medium">{study.client}</p>
                  </div>

                  {/* Problem, Solution, Result */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Challenge
                      </h4>
                      <p className="text-muted-foreground pl-5">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        Solution
                      </h4>
                      <p className="text-muted-foreground pl-5">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-navy mb-2 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Result
                      </h4>
                      <p className="text-muted-foreground pl-5">{study.result}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-navy">{study.metrics.timeframe}</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-navy">{study.metrics.savings}</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-navy">{study.metrics.satisfaction}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="tel:+13069601411"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
                  >
                    Discuss your project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-navy mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique, and we tailor our approach to meet your specific needs. Let's discuss how we can
              help you achieve your goals.
            </p>
            <a
              href="tel:+13069601411"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 btn-shine focus-ring"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
