import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Home = () => {
  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Embroidered Abaya',
      category: 'Abayas',
      image: 'https://images.unsplash.com/photo-1581404635299-22c937979ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant abaya with intricate embroidery details, perfect for special occasions.'
    },
    {
      id: 2,
      name: 'Luxury Beaded Kaftan',
      category: 'Kaftans',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Stunning kaftan with exquisite beadwork, designed for formal events and celebrations.'
    },
    {
      id: 3,
      name: 'Premium Silk Hijab Collection',
      category: 'Hijabs',
      image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxurious silk hijabs in a variety of colors for an elegant and sophisticated look.'
    },
    {
      id: 4,
      name: 'Designer Jilbab',
      category: 'Jilbabs',
      image: 'https://images.unsplash.com/photo-1583759136431-9d70db2eb04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary jilbab featuring modern design elements and premium fabric.'
    }
  ]

  // Custom services highlights
  const serviceHighlights = [
    {
      id: 'embroidery',
      name: 'Custom Embroidery',
      icon: '🧵',
      description: 'Elevate your garments with our exquisite embroidery services, featuring traditional and modern designs.'
    },
    {
      id: 'beading',
      name: 'Beading Services',
      icon: '💎',
      description: 'Add elegance and luxury with our premium beading services, from subtle accents to elaborate patterns.'
    },
    {
      id: 'printing',
      name: 'Printing Services',
      icon: '🖌️',
      description: 'Transform your garments with our high-quality printing services using various techniques.'
    },
    {
      id: 'custom-design',
      name: 'Full Custom Design',
      icon: '✏️',
      description: 'Create truly unique garments with our full custom design service, from concept to creation.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white bg-dark">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Bayachic</h1>
          <p className="text-2xl md:text-3xl font-serif mb-8">Elegant Muslim Women's Clothing</p>
          <p className="max-w-2xl mx-auto text-lg mb-10">
            Premium custom clothing services for the global market. 
            Specializing in Abayas, Kaftans, Hijabs, and Jilbabs with custom embroidery, beading, and printing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn btn-secondary text-lg px-8 py-3">
              Explore Products
            </Link>
            <Link to="/custom-services" className="btn btn-primary text-lg px-8 py-3">
              Custom Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
            Discover our collection of high-quality Muslim women's clothing, designed with elegance, comfort, and modesty in mind.
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary bg-primary bg-opacity-10 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
                  <p className="mb-4 text-gray-600">{product.description}</p>
                  <Link 
                    to="/products" 
                    className="inline-block px-6 py-2 text-white transition-colors rounded-md bg-primary hover:bg-opacity-90"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-block px-8 py-3 font-medium transition-colors border-2 rounded-md border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Custom Services</h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
            We offer a range of customization services to help you create unique garments that reflect your style and preferences.
          </p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((service) => (
              <div key={service.id} className="p-6 text-center transition-transform duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-full bg-primary bg-opacity-10 text-primary">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.name}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link 
                  to={`/custom-services#${service.id}`} 
                  className="font-medium text-primary hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/custom-services" 
              className="inline-block px-8 py-3 font-medium transition-colors border-2 rounded-md border-primary text-primary hover:bg-primary hover:text-white"
            >
              Explore Custom Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Bayachic</h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
            We're committed to providing high-quality products, exceptional service, and a seamless experience for our clients.
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-full bg-primary bg-opacity-10 text-primary">
                ⭐
              </div>
              <h3 className="mb-3 text-xl font-bold">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials and employ skilled artisans to ensure every garment meets our high standards.
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-full bg-primary bg-opacity-10 text-primary">
                🌍
              </div>
              <h3 className="mb-3 text-xl font-bold">Global Experience</h3>
              <p className="text-gray-600">
                With years of experience serving clients worldwide, we understand the unique needs of different markets and cultures.
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-full bg-primary bg-opacity-10 text-primary">
                🤝
              </div>
              <h3 className="mb-3 text-xl font-bold">Personalized Service</h3>
              <p className="text-gray-600">
                We work closely with each client to understand their needs and provide tailored solutions for their specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inquiry-section" className="py-16 text-white bg-primary">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss your requirements and get a personalized quote for your order.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 font-medium text-primary transition-colors bg-white rounded-md hover:bg-gray-100">
              Contact Us
            </Link>
            <ScrollLink 
              to="inquiry-form" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="px-8 py-3 font-medium transition-colors border border-white rounded-md cursor-pointer hover:bg-white hover:text-primary"
            >
              Request a Quote
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Request a Quote</h2>
          <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
            Fill out the form below to get a personalized quote for your specific requirements.
          </p>
          
          <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-lg">
            <form name="home-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="home-inquiry" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="interest" className="block mb-2 font-medium">I'm interested in: *</label>
                <select 
                  id="interest" 
                  name="interest" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="abayas">Abayas</option>
                  <option value="kaftans">Kaftans</option>
                  <option value="hijabs">Hijabs</option>
                  <option value="jilbabs">Jilbabs</option>
                  <option value="embroidery">Custom Embroidery</option>
                  <option value="beading">Beading Services</option>
                  <option value="printing">Printing Services</option>
                  <option value="custom-design">Full Custom Design</option>
                  <option value="wholesale">Wholesale Orders</option>
                  <option value="other">Other (Please specify)</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="quantity" className="block mb-2 font-medium">Estimated Quantity *</label>
                <input 
                  type="number" 
                  id="quantity" 
                  name="quantity" 
                  min="1"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Please describe your requirements in detail, including any specific designs, colors, or materials you're interested in."
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="consent" 
                    className="mt-1 mr-2" 
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I consent to Bayachic collecting and storing my data from this form to respond to my inquiry. 
                    We respect your privacy and will not share your information with third parties. *
                  </span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 text-white transition-colors rounded-md bg-primary hover:bg-opacity-90"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home