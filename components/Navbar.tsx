import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Story', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent
      ${scrolled ? 'bg-muglan-dark/95 backdrop-blur-md py-4 border-white/5' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a href="#home" className="flex flex-col items-center">
              <span className="font-serif text-3xl font-bold tracking-wider text-white group-hover:text-muglan-gold transition-colors">
                MUGLAN
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muglan-gold">Est. 2008</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white relative group py-2 tracking-widest uppercase"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-muglan-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <div className="h-6 w-[1px] bg-gray-700 mx-4"></div>

            <div className="flex items-center gap-6">
               <button className="text-white hover:text-muglan-gold transition-colors relative group">
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-muglan-gold text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
              </button>
              <a
                href="#reservation"
                className="bg-transparent border border-muglan-gold text-muglan-gold px-6 py-2 hover:bg-muglan-gold hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-widest"
              >
                Book Table
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button className="text-white relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-muglan-gold text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-muglan-gold transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-muglan-dark z-40 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-gray-400 hover:text-white">
             <X className="w-8 h-8" />
           </button>
           {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-muglan-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-3 bg-muglan-gold text-black font-bold uppercase tracking-widest"
            >
              Book a Table
            </a>
        </div>
      </div>
    </nav>
  );
};