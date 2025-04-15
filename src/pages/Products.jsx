import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaShoppingBag, FaTags, FaRegStar, FaRegHeart } from 'react-icons/fa'

const Products = () => {
  // Product data
  const productCategories = [
    {
      id: 'abayas',
      name: 'Abayas',
      description: 'Elegant and modest full-length garments designed to provide complete coverage while maintaining style and sophistication.',
      products: [
        {
          id: 1,
          name: 'Classic Black Abaya',
          image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'A timeless black abaya with simple, elegant design suitable for everyday wear.'
        },
        {
          id: 2,
          name: 'Embroidered Formal Abaya',
          image: 'https://images.unsplash.com/photo-1581404635299-22c937979ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Luxurious abaya with intricate embroidery details, perfect for special occasions.'
        },
        {
          id: 3,
          name: 'Modern Cut Abaya',
          image: 'https://images.unsplash.com/photo-1583759136431-9d70db2eb04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Contemporary design with stylish cuts and premium fabric for the modern woman.'
        }
      ]
    },
    {
      id: 'kaftans',
      name: 'Kaftans',
      description: 'Loose-fitting, ankle-length garments with beautiful embellishments, perfect for both casual and formal occasions.',
      products: [
        {
          id: 4,
          name: 'Casual Summer Kaftan',
          image: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Lightweight kaftan in breathable fabric, ideal for warm weather.'
        },
        {
          id: 5,
          name: 'Beaded Evening Kaftan',
          image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Elegant kaftan with exquisite beadwork, designed for special events and celebrations.'
        },
        {
          id: 6,
          name: 'Printed Silk Kaftan',
          image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Luxurious silk kaftan with beautiful prints, combining comfort with sophistication.'
        }
      ]
    },
    {
      id: 'hijabs',
      name: 'Hijabs',
      description: 'High-quality head coverings in various fabrics, colors, and styles to complement any outfit.',
      products: [
        {
          id: 7,
          name: 'Premium Cotton Hijab',
          image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Soft, breathable cotton hijab for everyday comfort and style.'
        },
        {
          id: 8,
          name: 'Chiffon Hijab Collection',
          image: 'https://images.unsplash.com/photo-1541941702428-22609a10cb9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Lightweight, flowing chiffon hijabs in a variety of colors for an elegant look.'
        },
        {
          id: 9,
          name: 'Embellished Occasion Hijab',
          image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Beautifully decorated hijabs with subtle embellishments for special occasions.'
        }
      ]
    },
    {
      id: 'jilbabs',
      name: 'Jilbabs',
      description: 'Long, loose-fitting outer garments that cover the entire body, available in various styles and fabrics.',
      products: [
        {
          id: 10,
          name: 'Classic Jilbab',
          image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Traditional jilbab design with full coverage and comfortable fit.'
        },
        {
          id: 11,
          name: 'Modern Jilbab with Button Details',
          image: 'https://images.unsplash.com/photo-1583759136431-9d70db2eb04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Contemporary jilbab featuring stylish button details and premium fabric.'
        },
        {
          id: 12,
          name: 'Layered Jilbab Set',
          image: 'https://images.unsplash.com/photo-1581404635299-22c937979ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          description: 'Elegant layered jilbab set with matching accessories for a complete look.'
        }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-dark">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold">Our Products</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">Discover our collection of high-quality Muslim women's clothing, designed with elegance, comfort, and modesty in mind.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {productCategories.map((category) => (
              <ScrollLink 
                key={category.id}
                to={category.id} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="px-4 py-2 text-sm font-medium transition-colors bg-white bg-opacity-20 rounded-md cursor-pointer hover:bg-white hover:text-primary"
              >
                {category.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category) => (
        <section key={category.id} id={category.id} className="section">
          <div className="container">
            <h2 className="section-title">{category.name}</h2>
            <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">{category.description}</p>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <div key={product.id} className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                      <ScrollLink 
                        to="inquiry-form" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                        className="inline-flex items-center px-4 py-2 mx-2 text-sm font-medium text-white transition-colors bg-primary rounded-md hover:bg-opacity-90"
                      >
                        <FaRegHeart className="mr-2" /> Inquire Now
                      </ScrollLink>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="flex items-center text-xs font-medium text-primary bg-primary bg-opacity-10 px-2 py-1 rounded-full">
                        <FaTags className="mr-1" /> {category.name}
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaRegStar className="mr-1 text-yellow-500" /> Premium Quality
                      </div>
                      <ScrollLink 
                        to="inquiry-form" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <FaShoppingBag className="mr-1" /> Request Quote
                      </ScrollLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-16 text-white bg-dark">
        <div className="container">
          <h2 className="section-title text-white">Request a Quote</h2>
          <p className="max-w-2xl mx-auto mb-10 text-center">Interested in our products? Fill out the form below to get a personalized quote for your specific requirements.</p>
          
          <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-lg text-dark">
            <form name="product-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="product-inquiry" />
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
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block mb-2 font-medium">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="product" className="block mb-2 font-medium">Product Interest *</label>
                <select 
                  id="product" 
                  name="product" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a product category</option>
                  <option value="abayas">Abayas</option>
                  <option value="kaftans">Kaftans</option>
                  <option value="hijabs">Hijabs</option>
                  <option value="jilbabs">Jilbabs</option>
                  <option value="custom">Custom Design</option>
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

export default Products