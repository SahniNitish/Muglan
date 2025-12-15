import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Entrées' },
  { id: 'mains', label: 'Mains' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Libations' },
];

interface MenuProps {
  addToCart: () => void;
}

export const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-muglan-dark relative scroll-mt-24">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
         <img src="https://www.transparenttextures.com/patterns/cubes.png" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-muglan-gold font-script text-3xl block mb-2">Our Selection</span>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Culinary Menu</h3>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 border-b border-gray-800 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 py-2 ${
                activeCategory === cat.id
                  ? 'text-muglan-gold border-b border-muglan-gold'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fine Dining List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {filteredItems.map((item: MenuItem) => (
            <div key={item.id} className="group flex gap-4 md:gap-6 items-start">
               {/* Image Thumbnail - Only show on larger screens for elegance */}
               <div className="hidden sm:block w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border border-gray-800 group-hover:border-muglan-gold transition-colors duration-500">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>

               <div className="flex-grow">
                 <div className="flex justify-between items-baseline border-b border-gray-800 pb-2 mb-2 group-hover:border-gray-700 transition-colors">
                    <h4 className="text-xl font-serif text-gray-200 group-hover:text-muglan-gold transition-colors">{item.name}</h4>
                    <span className="text-muglan-gold font-serif text-lg ml-4">${item.price}</span>
                 </div>
                 <p className="text-gray-500 text-sm font-light leading-relaxed mb-3">{item.description}</p>
                 
                 <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        {item.isVeg && <span className="text-[10px] uppercase tracking-wider text-green-500 border border-green-900 px-2 py-0.5 rounded">Veg</span>}
                        {item.isSpicy && <span className="text-[10px] uppercase tracking-wider text-red-500 border border-red-900 px-2 py-0.5 rounded">Spicy</span>}
                        {item.isChefSpecial && <span className="text-[10px] uppercase tracking-wider text-muglan-gold border border-yellow-900 px-2 py-0.5 rounded">Special</span>}
                    </div>
                    
                    <button 
                        onClick={addToCart}
                        className="text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                        <Plus className="w-3 h-3" /> Add
                    </button>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};