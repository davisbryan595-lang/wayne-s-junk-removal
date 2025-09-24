"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const beforeAfterPairs = [
  {
    id: 1,
    title: "Garage Cleanout",
    before: "/before-image--cluttered-garage-with-old-furniture-.jpg",
    after: "/after-image--same-garage-clean-and-organized--phot.jpg",
    description: "Complete garage transformation with junk removal and organization",
  },
  {
    id: 2,
    title: "Driveway Snow Clearing",
    before: "/before-image--snow-covered-residential-driveway-bl.jpg",
    after: "/after-image--same-driveway-completely-cleared-of-s.jpg",
    description: "Professional snow removal for safe vehicle access",
  },
  {
    id: 3,
    title: "Basement Cleanout",
    before: "/before-image--cluttered-basement-with-old-applianc.jpg",
    after: "/after-image--same-basement-clean-and-empty--organi.jpg",
    description: "Full basement junk removal and cleanup service",
  },
  {
    id: 4,
    title: "Commercial Snow Removal",
    before: "/before-image--snow-covered-commercial-parking-lot-.jpg",
    after: "/after-image--same-parking-lot-completely-plowed-an.jpg",
    description: "Large-scale commercial snow clearing operations",
  },
  {
    id: 5,
    title: "Estate Cleanout",
    before: "/before-image--house-interior-filled-with-furniture.jpg",
    after: "/after-image--same-house-interior-completely-empty-.jpg",
    description: "Comprehensive estate cleanout and preparation",
  },
  {
    id: 6,
    title: "Furniture Delivery Setup",
    before: "/before-image--empty-living-room-with-boxes-and-pac.jpg",
    after: "/placeholder.svg?height=400&width=600",
    description: "Professional furniture delivery and assembly service",
  },
]

export default function Gallery() {
  const [currentPair, setCurrentPair] = useState(0)
  const [showBefore, setShowBefore] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [visiblePairs, setVisiblePairs] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pairIndex = Number.parseInt(entry.target.getAttribute("data-pair") || "0")
            setVisiblePairs((prev) => [...prev, pairIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const pairs = sectionRef.current?.querySelectorAll("[data-pair]")
    pairs?.forEach((pair) => observer.observe(pair))

    return () => observer.disconnect()
  }, [])

  const nextPair = () => {
    setCurrentPair((prev) => (prev + 1) % beforeAfterPairs.length)
    setShowBefore(true)
  }

  const prevPair = () => {
    setCurrentPair((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
    setShowBefore(true)
  }

  const toggleBeforeAfter = () => {
    setShowBefore(!showBefore)
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">Before & After Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See the dramatic transformations we achieve through our professional services. From cluttered spaces to
            clean environments, we deliver results that speak for themselves.
          </p>
        </div>

        {/* Featured Before/After Slider */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={showBefore ? beforeAfterPairs[currentPair].before : beforeAfterPairs[currentPair].after}
                alt={`${showBefore ? "Before" : "After"} - ${beforeAfterPairs[currentPair].title}`}
                fill
                className="object-cover transition-all duration-500"
              />

              {/* Before/After Toggle */}
              <div className="absolute top-4 left-4 flex bg-black/50 rounded-full overflow-hidden">
                <button
                  onClick={() => setShowBefore(true)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    showBefore ? "bg-white text-navy" : "text-white hover:bg-white/20"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    !showBefore ? "bg-white text-navy" : "text-white hover:bg-white/20"
                  }`}
                >
                  After
                </button>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevPair}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors focus-ring"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPair}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors focus-ring"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Expand Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors focus-ring"
                aria-label="View fullscreen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
            </div>

            {/* Image Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy mb-2">{beforeAfterPairs[currentPair].title}</h3>
              <p className="text-muted-foreground">{beforeAfterPairs[currentPair].description}</p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {beforeAfterPairs.map((pair, index) => (
              <button
                key={pair.id}
                onClick={() => {
                  setCurrentPair(index)
                  setShowBefore(true)
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  currentPair === index ? "border-primary" : "border-transparent hover:border-gray-300"
                }`}
              >
                <Image
                  src={pair.before || "/placeholder.svg"}
                  alt={pair.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterPairs.map((pair, index) => {
            const isVisible = visiblePairs.includes(index)

            return (
              <div
                key={pair.id}
                data-pair={index}
                className={`group bg-white rounded-xl overflow-hidden shadow-lg hover-lift transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative">
                      <Image
                        src={pair.before || "/placeholder.svg"}
                        alt={`Before - ${pair.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={pair.after || "/placeholder.svg"}
                        alt={`After - ${pair.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-navy mb-1">{pair.title}</h3>
                  <p className="text-sm text-muted-foreground">{pair.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors focus-ring"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={showBefore ? beforeAfterPairs[currentPair].before : beforeAfterPairs[currentPair].after}
                  alt={`${showBefore ? "Before" : "After"} - ${beforeAfterPairs[currentPair].title}`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={toggleBeforeAfter}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  Toggle {showBefore ? "After" : "Before"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
