import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-muglan-dark overflow-x-hidden text-gray-200">
      <Navbar cartCount={cartCount} />
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
    </div>
  );
}

export default App;