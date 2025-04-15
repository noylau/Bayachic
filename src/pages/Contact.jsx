import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 text-white bg-dark">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">Have questions or ready to start your custom order? Get in touch with our team today.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-gray-600">
                We're here to answer any questions you may have about our products and services. 
                Reach out to us and we'll respond as soon as we can.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary bg-opacity-10">
                    <FaEnvelope className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Email</h3>
                    <a href="mailto:service@bayachic.com" className="text-gray-600 hover:text-primary">service@bayachic.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary bg-opacity-10">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Phone</h3>
                    <a href="tel:8613699703575" className="text-gray-600 hover:text-primary">+86 13699703575</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary bg-opacity-10">
                    <FaWhatsapp className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">WhatsApp</h3>
                    <a href="https://wa.me/8613699703575" className="text-gray-600 hover:text-primary">+86 13699703575</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-primary bg-opacity-10">
                    <FaMapMarkerAlt className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Office Address</h3>
                    <p className="text-gray-600">2nd Floor, Dezhi Creative Park, Dashi Street, Panyu District, Guangzhou, China</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form name="contact-form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact-form" />
                
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 text-white transition-colors rounded-md bg-primary hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Our Location</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3671192270847!2d113.3235!3d23.0585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzMwLjYiTiAxMTPCsDE5JzI0LjYiRQ!5e0!3m2!1sen!2sus!4v1635176850!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Bayachic Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact