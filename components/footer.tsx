import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Facebook, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/wayneslogo.jpeg"
                alt="Wayne's Junk & Snow Removal Ltd"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Wayne's Junk & Snow Removal Ltd</h3>
                <p className="text-gray-300">Professional Service You Can Trust</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              Your reliable partner for snow removal, junk removal, and furniture delivery services. We're committed to
              keeping your property clean, safe, and accessible year-round.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13069601411"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 306-960-1411</span>
              </a>

              <a
                href="mailto:waynesjunkremoval1@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>waynesjunkremoval1@gmail.com</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581252544319&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Snow Removal
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Furniture Delivery
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Hours
              </h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon-Fri: 7AM-7PM</div>
                <div>Sat: 8AM-6PM</div>
                <div>Sun: 9AM-5PM</div>
                <div className="text-primary font-medium mt-2">24/7 Emergency Snow</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Wayne's Junk & Snow Removal Ltd. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Free Estimates</span>
              <span>•</span>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-4 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium">24/7 Emergency Snow Removal</span>
            </div>
            <span>•</span>
            <a href="tel:+13069601411" className="font-bold hover:underline">
              Call: +1 306-960-1411
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
