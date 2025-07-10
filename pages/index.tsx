import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FiClock, FiPhone, FiMapPin,} from 'react-icons/fi';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="font-sans bg-white">
      <Head>
        <title>SmartFood Restaurant | Modern Dining</title>
        <meta name="description" content="Premium culinary experience" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">SMARTFOOD</div>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'Gallery', 'Reservations'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-red-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">SmartFood Restaurant</h1>
            <p className="text-xl md:text-2xl mb-8">Where flavor meets innovation</p>
            <a 
              href="#reservations" 
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-medium inline-block transition-colors duration-300"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
          
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {['All', 'Starters', 'Mains', 'Desserts', 'Drinks'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 mx-2 whitespace-nowrap rounded-full transition-colors duration-300 ${
                  activeTab === tab.toLowerCase() 
                    ? 'bg-red-600 text-white' 
                    : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-200 h-48 mb-4 rounded-lg animate-pulse"></div>
                <h3 className="text-xl font-semibold mb-2">Signature Dish {item}</h3>
                <p className="text-gray-600 mb-4">Delicious description will appear here</p>
                <p className="text-red-600 font-bold">$XX.XX</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div 
                key={img} 
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500"
              >
                <div className="w-full h-full bg-gray-300 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Make a Reservation</h2>
          <form className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            />
            <select className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition">
              <option>Number of Guests</option>
              <option>1-2</option>
              <option>3-4</option>
              <option>5-6</option>
              <option>7+</option>
            </select>
            <input 
              type="date" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            />
            <input 
              type="time" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
            />
            <textarea 
              placeholder="Special Requests" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition md:col-span-2 h-32"
            ></textarea>
            <button 
              type="submit" 
              className="md:col-span-2 bg-red-600 hover:bg-red-700 py-3 rounded font-medium text-white transition-colors duration-300"
            >
              Book Table
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-start">
              <FiMapPin className="text-red-400 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p>123 Restaurant Avenue<br />Foodie City, FC 10001</p>
              </div>
            </div>
            <div className="flex items-start">
              <FiClock className="text-red-400 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-3">Hours</h3>
                <p>Mon-Fri: 11AM - 10PM<br />Sat-Sun: 10AM - 11PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <FiPhone className="text-red-400 text-2xl mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-3">Contact</h3>
                <p>(123) 456-7890<br />info@smartfood.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} SmartFood Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Skeleton */}
      <div className="h-16 bg-gray-200 animate-pulse"></div>
      {/* */}
      {/* Hero Skeleton */}
      <div className="h-[80vh] bg-gray-300 animate-pulse"></div>
      
      {/* Menu Section Skeleton */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="h-10 w-1/3 bg-gray-300 rounded mx-auto mb-12 animate-pulse"></div>
          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-24 bg-gray-300 rounded-full animate-pulse"></div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-gray-300 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}