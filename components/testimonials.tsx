"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Wayne's team did an incredible job clearing our driveway and walkways all winter. They were always prompt, professional, and reasonably priced. I never had to worry about getting stuck in my driveway again!",
    service: "Snow Removal",
  },
  {
    id: 2,
    name: "Mike Thompson",
    role: "Business Owner",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "We hired Wayne's for a complete office cleanout when we moved locations. They handled everything from furniture removal to debris cleanup. The team was efficient, careful with our belongings, and left the space spotless.",
    service: "Junk Removal",
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    role: "Property Manager",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a property manager, I need reliable service providers I can count on. Wayne's has been fantastic for both snow removal and junk cleanouts across multiple properties. Their communication and follow-through is excellent.",
    service: "Multiple Services",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Wayne's delivered and set up our new living room furniture perfectly. They were careful with our floors, assembled everything properly, and even helped us arrange the layout. Great service from start to finish!",
    service: "Furniture Delivery",
  },
]

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialIndex = Number.parseInt(entry.target.getAttribute("data-testimonial") || "0")
            setVisibleTestimonials((prev) => [...prev, testimonialIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const testimonialElements = sectionRef.current?.querySelectorAll("[data-testimonial]")
    testimonialElements?.forEach((testimonial) => observer.observe(testimonial))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what real customers have to say about their experience with Wayne's
            Junk & Snow Removal Ltd.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleTestimonials.includes(index)

            return (
              <div
                key={testimonial.id}
                data-testimonial={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-navy">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "1000+", label: "Jobs Completed" },
            { number: "5★", label: "Average Rating" },
            { number: "3+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">Join Our Satisfied Customers</h3>
            <p className="text-muted-foreground mb-6">
              Ready to experience the same professional service that our customers rave about?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13069601411"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 btn-shine focus-ring"
              >
                Call: +1 306-960-1411
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581252544319&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors focus-ring"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
