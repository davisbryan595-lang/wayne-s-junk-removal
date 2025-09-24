import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Gallery from "@/components/gallery"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
