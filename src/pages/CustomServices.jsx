import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const CustomServices = () => {
  // Custom services data
  const customServices = [
    {
      id: 'embroidery',
      name: 'Custom Embroidery',
      description: 'Elevate your garments with our exquisite embroidery services. We offer traditional and modern designs that can be customized to your preferences.',
      image: 'https://images.unsplash.com/photo-1597843797221-e34b4a320b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Hand and machine embroidery options',
        'Custom design creation from your concepts',
        'Wide range of thread colors and materials',
        'Suitable for all garment types',
        'Various embroidery styles including Arabic, floral, and geometric patterns'
      ]
    },
    {
      id: 'beading',
      name: 'Beading Services',
      description: 'Add elegance and luxury to your garments with our premium beading services. Our skilled artisans create stunning beadwork that catches the light beautifully.',
      image: 'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Premium quality beads and crystals',
        'Custom patterns and designs',
        'Combination of beading with embroidery',
        'Suitable for formal and bridal wear',
        'Durable application techniques for long-lasting beauty'
      ]
    },
    {
      id: 'printing',
      name: 'Printing Services',
      description: 'Transform your garments with our high-quality printing services. We offer various techniques to create beautiful patterns and designs on fabric.',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Digital printing for detailed designs',
        'Screen printing for bold patterns',
        'Heat transfer for specialty materials',
        'Eco-friendly ink options',
        'Custom color matching to your specifications'
      ]
    },
    {
      id: 'custom-design',
      name: 'Full Custom Design',
      description: 'Create truly unique garments with our full custom design service. From concept to creation, we work with you to bring your vision to life.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Professional design consultation',
        'Custom pattern creation',
        'Material selection assistance',
        'Multiple fitting options',
        'Complete production from design to finished garment'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 text-white bg-dark">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">Custom Services</h1>
          <p className="max-w-2xl mx-auto text-lg">Elevate your garments with our premium customization services. From intricate embroidery to elegant beading and vibrant printing, we bring your vision to life.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Customization Services</h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
            At Bayachic, we specialize in transforming ordinary garments into extraordinary pieces of art. 
            Our skilled artisans combine traditional techniques with modern technology to create custom designs 
            that reflect your unique style and cultural preferences.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {customServices.map((service) => (
              <div key={service.id} className="text-center">
                <ScrollLink 
                  to={service.id} 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="cursor-pointer"
                >
                  <div className="p-6 transition-transform duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
                    <h3 className="mb-3 text-xl font-bold">{service.name}</h3>
                    <p className="text-gray-600">{service.description.substring(0, 100)}...</p>
                    <p className="mt-4 font-medium text-primary">Learn More</p>
                  </div>
                </ScrollLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {customServices.map((service) => (
        <section key={service.id} id={service.id} className="section">
          <div className="container">
            <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-3xl font-bold">{service.name}</h2>
                <p className="mb-6 text-gray-600">{service.description}</p>
                
                <h3 className="mb-4 text-xl font-semibold">Features:</h3>
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <ScrollLink 
                  to="inquiry-form" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                  className="inline-block px-6 py-2 text-white transition-colors rounded-md bg-primary hover:bg-opacity-90"
                >
                  Request a Quote
                </ScrollLink>
              </div>
              
              <div className="order-1 md:order-2">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="object-cover w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-16 text-white bg-dark">
        <div className="container">
          <h2 className="section-title text-white">Request a Custom Quote</h2>
          <p className="max-w-2xl mx-auto mb-10 text-center">Tell us about your custom project, and our team will get back to you with a detailed quote and timeline.</p>
          
          <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-lg text-dark">
            <form name="custom-service-inquiry" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="custom-service-inquiry" />
              
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
                <label htmlFor="service" className="block mb-2 font-medium">Service Type</label>
                <select 
                  id="service" 
                  name="service" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="embroidery">Custom Embroidery</option>
                  <option value="beading">Beading Services</option>
                  <option value="printing">Printing Services</option>
                  <option value="custom-design">Full Custom Design</option>
                  <option value="other">Other (Please specify)</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="quantity" className="block mb-2 font-medium">Estimated Quantity</label>
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
                <label htmlFor="message" className="block mb-2 font-medium">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Please describe your project, including any specific designs, colors, or materials you're interested in."
                  required
                ></textarea>
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

export default CustomServices