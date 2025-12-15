import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { Cart, CartItem } from './components/Cart';
import { menuData } from './data/menuData';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (itemName: string, category: string) => {
    // Find the item from menu data
    const menuItem = menuData
      .flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })))
      .find(item => item.name === itemName && item.category === category);

    if (!menuItem) return;

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === `${menuItem.name}-${category}`);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === `${menuItem.name}-${category}`
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, {
          id: `${menuItem.name}-${category}`,
          name: menuItem.name,
          price: menuItem.price,
          quantity: 1,
          image_url: menuItem.image_url,
          category: category
        }];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-muglan-dark overflow-x-hidden text-gray-200">
      <Navbar cartCount={cartCount} onCartClick={toggleCart} />
      <Hero />
      <About />
      <Menu addToCart={addToCart} />
      
      {/* Testimonials Banner - High End Editorial Style */}
      <section className="py-24 bg-muglan-charcoal relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-muglan-gold to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="text-muglan-gold text-5xl mb-6 opacity-50 font-serif">"</div>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-white mb-8">
            The best authentic Himalayan dining experience in the city. <br/>
            <span className="text-muglan-gold italic">A culinary masterpiece.</span>
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(star => <span key={star} className="text-muglan-gold text-xl">★</span>)}
            </div>
            <p className="font-sans text-sm tracking-[0.2em] text-gray-400 uppercase">Sydney Morning Herald</p>
          </div>
        </div>
      </section>

      <Reservation />
      
      {/* Gallery - Dark Mosaic */}
      <section id="gallery" className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-muglan-dark scroll-mt-24">
        {[10, 12, 13, 14, 15, 16, 17, 18].map((id, index) => (
          <div key={id} className={`relative h-80 overflow-hidden group ${index % 3 === 0 ? 'md:col-span-2' : ''}`}>
            <img 
              src={`https://picsum.photos/800/800?random=${id}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
              alt="Gallery" 
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="border border-muglan-gold px-6 py-3">
                <span className="text-muglan-gold font-serif italic text-xl">View</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />

      {/* Cart Sidebar */}
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        onClose={() => setIsCartOpen(false)}
        isOpen={isCartOpen}
      />
    </div>
  );
}

export default App;