import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="bg-muglan-charcoal text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden scroll-mt-24">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
             <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-1 tracking-wide">MUGLAN</h3>
                <p className="text-muglan-gold text-xs uppercase tracking-[0.3em]">Est. 2008</p>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed font-light">
               Authentic Himalayan cuisine re-imagined for the modern palate. Experience the warmth of our hospitality and the richness of our flavors.
             </p>
             <div className="flex space-x-4 pt-4">
               {/* Socials - minimalist */}
               <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-muglan-gold hover:border-muglan-gold transition-all duration-300"><Facebook className="w-4 h-4" /></a>
               <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-muglan-gold hover:border-muglan-gold transition-all duration-300"><Instagram className="w-4 h-4" /></a>
               <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-muglan-gold hover:border-muglan-gold transition-all duration-300"><Twitter className="w-4 h-4" /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8 relative inline-block">
              Discover
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-muglan-gold"></span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'Our Story', 'Menu', 'Reservations', 'Private Dining'].map((item) => (
                 <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '') === 'homie' ? 'home' : item.toLowerCase().replace(' ', '') === 'ourstory' ? 'about' : item.toLowerCase().replace(' ', '') === 'privatedining' ? 'contact' : item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 text-muglan-gold text-xs">―</span> {item}
                    </a>
                 </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8 relative inline-block">
              Visit Us
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-muglan-gold"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-gray-500 group-hover:text-muglan-gold transition-colors mt-1" />
                <span className="text-gray-400 text-sm font-light leading-relaxed">123 Culinary Avenue,<br/>Sydney, NSW 2000</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-muglan-gold transition-colors" />
                <span className="text-gray-400 text-sm font-light">+61 2 9876 5432</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-muglan-gold transition-colors" />
                <span className="text-gray-400 text-sm font-light">dining@muglan.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8 relative inline-block">
              The List
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-muglan-gold"></span>
             </h4>
             <p className="text-gray-400 text-sm mb-6 font-light">Join our exclusive mailing list for seasonal updates and private event invitations.</p>
             <form className="flex flex-col gap-4" onSubmit={handleSubscribe}>
               <div className="relative group">
                 <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address" 
                    className="w-full bg-black/30 border border-gray-800 rounded-none px-4 py-3 text-white text-sm focus:outline-none focus:border-muglan-gold transition-colors placeholder-gray-600"
                  />
               </div>
               <button 
                type="submit" 
                className={`text-xs font-bold uppercase tracking-widest py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2
                  ${subscribed ? 'bg-green-900 text-white border border-green-700' : 'bg-white text-black hover:bg-muglan-gold hover:text-black border border-white hover:border-muglan-gold'}`}
               >
                 {subscribed ? <><Check className="w-4 h-4"/> Joined</> : <><ArrowRight className="w-4 h-4"/> Subscribe</>}
               </button>
             </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Muglan Restaurant.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};