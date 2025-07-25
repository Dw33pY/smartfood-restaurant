import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FiClock, FiPhone, FiMapPin, FiX, FiMenu } from 'react-icons/fi';

// ========== TYPES ==========
type MenuCategory = 'all' | 'starters' | 'mains' | 'desserts';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

type MenuData = Record<Exclude<MenuCategory, 'all'>, MenuItem[]>;

// ========== CONSTANTS ==========
const HERO_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80';

const MENU_ITEMS: MenuData = {
  starters: [
    { 
      id: 1, 
      name: 'Bruschetta', 
      description: 'Toasted bread topped with tomatoes, garlic, and fresh basil', 
      price: '$8.99', 
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 2, 
      name: 'Calamari', 
      description: 'Crispy fried squid with lemon aioli', 
      price: '$12.99', 
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    }
  ],
  mains: [
    { 
      id: 3, 
      name: 'Filet Mignon', 
      description: '8oz premium cut with roasted vegetables', 
      price: '$28.99', 
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 4, 
      name: 'Pasta Carbonara', 
      description: 'Classic spaghetti with pancetta and egg sauce', 
      price: '$18.99', 
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    }
  ],
  desserts: [
    { 
      id: 5, 
      name: 'Tiramisu', 
      description: 'Coffee-flavored Italian dessert', 
      price: '$9.99', 
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 6, 
      name: 'Chocolate Lava Cake', 
      description: 'Warm chocolate cake with molten center', 
      price: '$8.99', 
      image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    }
  ]
};

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

// ========== COMPONENTS ==========
const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-square mb-4 rounded-lg overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
    <p className="text-gray-600 mb-4">{item.description}</p>
    <p className="text-red-600 font-bold">{item.price}</p>
  </div>
);

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div className="animate-pulse animate-fade-in flex flex-col items-center">
      <div className="text-4xl font-bold text-red-600 mb-4">SMARTFOOD</div>
      <div className="h-2 w-32 bg-red-400 rounded-full animate-pulse"></div>
    </div>
  </div>
);

// ========== MAIN COMPONENT ==========
export default function Home() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="font-sans bg-white">
      <Head>
        <title>SmartFood Restaurant | Modern Dining Experience</title>
        <meta name="description" content="Premium culinary experience with innovative flavors" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">SMARTFOOD</div>
          
          {/* Desktop Nav */}
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
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden">
              <nav className="flex flex-col items-center space-y-8 text-white">
                {['Home', 'Menu', 'Gallery', 'Reservations'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl hover:text-red-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] text-white">
        <div 
          className="absolute inset-0 bg-gray-900"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
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
            {(['All', 'Starters', 'Mains', 'Desserts'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase() as MenuCategory)}
                className={`px-6 py-2 mx-2 whitespace-nowrap rounded-full transition-colors duration-300 ${
                  activeTab === tab.toLowerCase() 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'all' ? (
              [...MENU_ITEMS.starters, ...MENU_ITEMS.mains, ...MENU_ITEMS.desserts].map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))
            ) : (
              MENU_ITEMS[activeTab]?.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500"
              >
                <img 
                  src={img} 
                  alt={`Restaurant gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              required
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              required
            />
            <select 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              required
            >
              <option value="">Number of Guests</option>
              {[1, 2, 3, 4, 5, 6, 7].map(num => (
                <option key={num} value={num}>
                  {num === 7 ? '7+' : num === 1 ? '1 person' : `${num} people`}
                </option>
              ))}
            </select>
            <input 
              type="date" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              required
            />
            <input 
              type="time" 
              className="p-3 rounded border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              required
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