"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Facebook, Clock, MapPin, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Formspree for form handling
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      const subject = encodeURIComponent(`Service Request: ${formData.service}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`,
      )
      window.location.href = `mailto:waynesjunkremoval1@gmail.com?subject=${subject}&body=${body}`
      setSubmitStatus("success")
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">Get Your Free Quote Today</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to get started? Contact us for a free, no-obligation quote. We respond quickly and provide transparent
            pricing for all our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help with all your snow removal, junk removal, and furniture delivery needs. Reach out
                today and let's discuss your project.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="tel:+13069601411"
                className="flex items-center space-x-4 p-4 bg-muted rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-navy group-hover:text-primary transition-colors">Call Us Now</div>
                  <div className="text-muted-foreground">+1 306-960-1411</div>
                </div>
              </a>

              <a
                href="mailto:waynesjunkremoval1@gmail.com"
                className="flex items-center space-x-4 p-4 bg-muted rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-navy group-hover:text-primary transition-colors">Email Us</div>
                  <div className="text-muted-foreground">waynesjunkremoval1@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581252544319&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-muted rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-navy group-hover:text-primary transition-colors">Follow Us</div>
                  <div className="text-muted-foreground">Facebook Page</div>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-navy">Business Hours</h4>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="mt-3 pt-3 border-t border-primary/20">
                  <div className="flex items-center space-x-2 text-primary font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>24/7 Emergency Snow Removal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-muted rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-navy">Service Area</h4>
              </div>
              <p className="text-muted-foreground">
                We proudly serve the greater metropolitan area and surrounding communities. Contact us to confirm
                service availability in your location.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-6">Request Your Free Quote</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Thank you! We've received your message and will contact you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  There was an error sending your message. Please try calling us directly at +1 306-960-1411.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Snow Removal">Snow Removal</option>
                  <option value="Junk Removal">Junk Removal</option>
                  <option value="Furniture Delivery">Furniture Delivery</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 btn-shine focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Required fields. We typically respond within 2-4 hours during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
