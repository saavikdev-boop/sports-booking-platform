'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Star, Clock, Filter, ChevronRight, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSport, setSelectedSport] = useState('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sports = [
    { id: 'all', name: 'All Sports', icon: '🏃' },
    { id: 'football', name: 'Football', icon: '⚽' },
    { id: 'basketball', name: 'Basketball', icon: '🏀' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
    { id: 'cricket', name: 'Cricket', icon: '🏏' },
    { id: 'badminton', name: 'Badminton', icon: '🏸' },
  ]

  const venues = [
    {
      id: 1,
      name: 'Elite Sports Complex',
      address: 'Gachibowli, Hyderabad',
      rating: 4.8,
      reviews: 324,
      price: 1500,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      sports: ['Football', 'Basketball'],
      amenities: ['Parking', 'Changing Room', 'Equipment'],
    },
    {
      id: 2,
      name: 'PowerPlay Arena',
      address: 'Madhapur, Hyderabad',
      rating: 4.6,
      reviews: 256,
      price: 1200,
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600',
      sports: ['Badminton', 'Tennis'],
      amenities: ['AC Courts', 'Pro Shop', 'Coaching'],
    },
    {
      id: 3,
      name: 'Champions Ground',
      address: 'Kondapur, Hyderabad',
      rating: 4.7,
      reviews: 189,
      price: 1800,
      image: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?w=600',
      sports: ['Cricket', 'Football'],
      amenities: ['Floodlights', 'Pavilion', 'Scoreboard'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                SportBooker
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Venues</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">My Bookings</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <button className="btn-primary">Sign In</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Venues</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">My Bookings</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</a>
              <button className="w-full btn-primary">Sign In</button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Perfect Sports Venue
            </h1>
            <p className="text-xl mb-10 text-blue-100">
              Find and book sports facilities near you in seconds
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Location"
                    className="input-field pl-10 text-gray-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    className="input-field pl-10 text-gray-800"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <button className="btn-primary flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search Venues
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="text-gray-600 flex-shrink-0" size={20} />
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap transition-all ${
                  selectedSport === sport.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{sport.icon}</span>
                <span>{sport.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Venues</h2>
            <button className="text-primary-600 hover:text-primary-700 flex items-center gap-1">
              View All <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-primary-600">₹{venue.price}/hr</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{venue.name}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm">{venue.address}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="text-sm font-semibold">{venue.rating}</span>
                      <span className="text-sm text-gray-500">({venue.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {venue.sports.map((sport) => (
                      <span
                        key={sport}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {sport}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mb-4">
                    {venue.amenities.slice(0, 2).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                    {venue.amenities.length > 2 && (
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        +{venue.amenities.length - 2}
                      </span>
                    )}
                  </div>

                  <button className="w-full btn-primary">Book Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose SportBooker?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
              <p className="text-gray-600">Book your favorite venue in seconds with real-time availability</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1000+ Venues</h3>
              <p className="text-gray-600">Choose from a wide selection of sports facilities near you</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Verified</h3>
              <p className="text-gray-600">Read reviews from thousands of sports enthusiasts</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SportBooker</h3>
              <p className="text-gray-400">Your gateway to sports and fitness</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 SportBooker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
