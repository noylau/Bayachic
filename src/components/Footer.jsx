import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Bayachic</h3>
            <p className="mb-4">Specializing in custom Muslim women's clothing for the global market. We offer high-quality Abayas, Kaftans, Hijabs, and more with custom embroidery, beading, and printing services.</p>
            <div className="flex flex-col space-y-2">
              <a href="mailto:service@bayachic.com" className="flex items-center hover:text-secondary">
                <FaEnvelope className="mr-2" /> service@bayachic.com
              </a>
              <a href="tel:8613699703575" className="flex items-center hover:text-secondary">
                <FaPhone className="mr-2" /> +86 13699703575
              </a>
              <a href="https://wa.me/8613699703575" className="flex items-center hover:text-secondary">
                <FaWhatsapp className="mr-2" /> WhatsApp: +86 13699703575
              </a>
              <p className="flex items-start hover:text-secondary">
                <FaMapMarkerAlt className="mr-2 mt-1" /> 
                <span>2nd Floor, Dezhi Creative Park, Dashi Street, Panyu District, Guangzhou, China</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/products" className="hover:text-secondary">Products</Link></li>
              <li><Link to="/custom-services" className="hover:text-secondary">Custom Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Our Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-secondary">Abayas</Link></li>
              <li><Link to="/products" className="hover:text-secondary">Kaftans</Link></li>
              <li><Link to="/products" className="hover:text-secondary">Hijabs</Link></li>
              <li><Link to="/products" className="hover:text-secondary">Jilbabs</Link></li>
              <li><Link to="/custom-services" className="hover:text-secondary">Custom Embroidery</Link></li>
              <li><Link to="/custom-services" className="hover:text-secondary">Beading Services</Link></li>
              <li><Link to="/custom-services" className="hover:text-secondary">Printing Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Bayachic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer