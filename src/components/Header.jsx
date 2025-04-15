import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-primary font-serif">Bayachic</Link>
        
        {/* Mobile menu button */}
        <button 
          className="p-2 md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/custom-services" className="hover:text-primary">Custom Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 z-50 flex flex-col bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="text-2xl font-bold text-primary font-serif" onClick={closeMenu}>Bayachic</Link>
            <button 
              className="p-2" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <nav className="flex-grow">
            <ul className="flex flex-col p-4 space-y-4">
              <li><Link to="/" className="block py-2 hover:text-primary" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/products" className="block py-2 hover:text-primary" onClick={closeMenu}>Products</Link></li>
              <li><Link to="/custom-services" className="block py-2 hover:text-primary" onClick={closeMenu}>Custom Services</Link></li>
              <li><Link to="/about" className="block py-2 hover:text-primary" onClick={closeMenu}>About Us</Link></li>
              <li>
                <Link to="/contact" className="block py-2 btn btn-primary text-center" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header