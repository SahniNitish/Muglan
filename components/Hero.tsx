import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-muglan-dark">
      {/* Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-muglan-dark"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-[fadeIn_1s_ease-out]">
            <p className="font-script text-3xl md:text-5xl text-muglan-gold mb-4 opacity-90">
            Welcome to Muglan
            </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight animate-[slideUp_1s_ease-out_0.3s_both]">
          <span className="block font-light">Taste the</span>
          <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Divine Himalayas</span>
        </h1>
        
        <div className="w-24 h-[1px] bg-muglan-gold mx-auto mb-8 animate-[grow_1s_ease-out_0.6s_both]"></div>

        <p className="text-gray-300 font-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-wide font-light leading-relaxed animate-[fadeIn_1s_ease-out_0.8s_both]">
          Where traditional Nepalese heritage meets modern culinary artistry. 
          Experience a symphony of spices in an ambiance of understated luxury.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[fadeIn_1s_ease-out_1s_both]">
          <a 
            href="#menu"
            className="px-8 py-3 bg-muglan-gold text-muglan-dark font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-300"
          >
            View Menu
          </a>
          <a 
            href="#reservation"
            className="px-8 py-3 border border-white text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-muglan-dark transition-all duration-300"
          >
            Reservations
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <a href="#about" className="text-white">
            <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};