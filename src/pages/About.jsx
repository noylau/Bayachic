import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const About = () => {
  // Company values
  const values = [
    {
      id: 'quality',
      title: 'Premium Quality',
      description: 'We use only the finest materials and employ skilled artisans to ensure every garment meets our high standards.',
      icon: '⭐'
    },
    {
      id: 'customization',
      title: 'Personalized Service',
      description: 'We believe in creating garments that reflect your unique style and cultural preferences.',
      icon: '👗'
    },
    {
      id: 'integrity',
      title: 'Business Integrity',
      description: 'We maintain transparent communication and fair business practices with all our clients and partners.',
      icon: '🤝'
    },
    {
      id: 'innovation',
      title: 'Continuous Innovation',
      description: 'We constantly explore new techniques and designs to offer you the latest in modest fashion.',
      icon: '💡'
    }
  ]

  // Team members
  const team = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'With over 15 years of experience in the fashion industry, Sarah founded Bayachic to create high-quality Muslim women\'s clothing that combines traditional modesty with contemporary style.'
    },
    {
      id: 2,
      name: 'Mohammed Rahman',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Mohammed brings his expertise in traditional Islamic art and modern fashion design to create unique patterns and styles for our collections.'
    },
    {
      id: 3,
      name: 'Aisha Wong',
      position: 'Production Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Aisha oversees our production process, ensuring that every garment is crafted to perfection and meets our quality standards.'
    },
    {
      id: 4,
      name: 'David Li',
      position: 'International Sales Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'David manages our relationships with clients around the world, helping them find the perfect products for their markets.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 text-white bg-dark">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">About Bayachic</h1>
          <p className="max-w-2xl mx-auto text-lg">Discover our story, our mission, and the team behind our beautiful Muslim women's clothing.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2015, Bayachic was born from a passion for creating beautiful, high-quality Muslim women's clothing 
                that combines traditional modesty with contemporary style. Based in Guangzhou, China, we started as a small 
                workshop with a team of skilled artisans dedicated to craftsmanship and attention to detail.
              </p>
              <p className="mb-4 text-gray-600">
                Over the years, we've grown into a trusted supplier for clients around the world, from the Middle East to 
                Europe, North America, and beyond. Our commitment to quality and customer satisfaction has helped us build 
                lasting relationships with retailers and individual customers alike.
              </p>
              <p className="text-gray-600">
                Today, Bayachic continues to innovate and expand our offerings, while staying true to our core values of 
                quality, integrity, and personalized service. We're proud to be part of the global modest fashion movement, 
                helping women express their faith and personal style with confidence and grace.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bayachic Workshop" 
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
            At Bayachic, our business is guided by a set of core values that define who we are and how we operate.
          </p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.id} className="p-6 text-center bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-full bg-primary bg-opacity-10 text-primary">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
            The talented individuals behind Bayachic who work tirelessly to bring you the finest Muslim women's clothing.
          </p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-primary">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you're looking for custom designs or wholesale orders, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 font-medium text-primary transition-colors bg-white rounded-md hover:bg-gray-100">
              Contact Us
            </Link>
            <Link to="/products" className="px-8 py-3 font-medium transition-colors border border-white rounded-md hover:bg-white hover:text-primary">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About