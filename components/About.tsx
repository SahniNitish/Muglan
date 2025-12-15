import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-muglan-charcoal overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative z-10 mb-12 lg:mb-0">
             <div className="relative h-[600px] w-full max-w-md mx-auto">
                 {/* Main Image */}
                <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                    <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                    alt="Chef plating food" 
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-muglan-gold opacity-30 pointer-events-none"></div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-10 -right-10 bg-muglan-dark p-8 shadow-2xl border-l-4 border-muglan-gold max-w-xs hidden md:block">
                    <p className="font-serif italic text-white text-lg mb-2">"Food is not just eating energy. It's an experience."</p>
                    <p className="text-muglan-gold text-sm uppercase tracking-widest">— Head Chef Sharma</p>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 lg:pl-20 text-center lg:text-left">
            <span className="text-muglan-gold font-script text-3xl block mb-4">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Crafting Memories <br/> Since 2008
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Muglan is more than a restaurant; it is a journey through the rugged peaks and fertile valleys of the Himalayas. We bring you recipes that have been guarded by families for generations, prepared with a modern finesse.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
              Every spice is hand-selected, every sauce slow-simmered, and every plate artfully composed to transport you to the heart of Nepal and India. We believe in the luxury of authenticity.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                <div>
                    <span className="block text-3xl font-serif text-white mb-1">15+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Years of Service</span>
                </div>
                <div>
                    <span className="block text-3xl font-serif text-white mb-1">100+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Original Recipes</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};