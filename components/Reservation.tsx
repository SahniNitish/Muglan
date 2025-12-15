import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, CheckCircle, Loader } from 'lucide-react';
import { submitReservation } from '../services/mockService';
import { ReservationData } from '../types';

export const Reservation: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await submitReservation(formData);
      if (result.success) {
        setSuccess(true);
        setConfirmationCode(result.confirmationCode);
      }
    } catch (error) {
      console.error("Booking failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="reservation" className="py-24 bg-muglan-dark relative border-t border-gray-900 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-muglan-charcoal p-12 rounded-sm border border-muglan-gold/30 shadow-2xl animate-[fadeIn_0.5s_ease-out]">
            <div className="w-16 h-16 bg-muglan-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="w-8 h-8 text-muglan-gold" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Reservation Confirmed</h3>
            <p className="text-gray-400 mb-8 font-light">We eagerly await your arrival, <span className="text-white">{formData.name}</span>.</p>
            
            <div className="bg-black/40 p-6 mb-8 border border-white/5">
              <span className="text-[10px] text-gray-500 block uppercase tracking-[0.3em] mb-2">Confirmation Code</span>
              <span className="text-3xl font-serif text-muglan-gold tracking-wider">{confirmationCode}</span>
            </div>
            
            <button 
              onClick={() => { setSuccess(false); setFormData({...formData, name: ''}); }}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-1"
            >
              Book Another Table
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 relative bg-black overflow-hidden scroll-mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-muglan-dark via-muglan-dark/95 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-white">
          <span className="text-muglan-gold font-script text-3xl block mb-2">Reservations</span>
          <h3 className="text-4xl md:text-6xl font-serif leading-tight mb-8">Secure Your <br/> Evening</h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light max-w-md">
            For intimate dinners or grand celebrations. Reserve a table online to ensure the perfect setting for your culinary experience.
          </p>
          
          <div className="space-y-6 border-l border-muglan-gold/30 pl-6">
             <div className="flex items-start gap-4">
                <div className="mt-1"><Phone className="w-5 h-5 text-muglan-gold"/></div>
                <div>
                    <h5 className="font-serif text-lg">Booking Line</h5>
                    <p className="text-gray-500 text-sm font-light">+61 2 9876 5432</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="mt-1"><Clock className="w-5 h-5 text-muglan-gold"/></div>
                <div>
                    <h5 className="font-serif text-lg">Opening Hours</h5>
                    <p className="text-gray-500 text-sm font-light">Mon-Sun: 11:00 AM - 10:00 PM</p>
                </div>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="bg-muglan-charcoal/80 backdrop-blur-md p-8 md:p-10 border border-white/5 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-muglan-gold to-transparent opacity-50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-muglan-gold transition-colors">Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="date"
                    required
                    className="w-full bg-black/40 text-white p-3 border-b border-gray-700 focus:border-muglan-gold outline-none transition-colors placeholder-transparent appearance-none"
                    onChange={handleChange}
                  />
                  <Calendar className="absolute right-3 top-3 text-gray-600 w-4 h-4 pointer-events-none" />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-muglan-gold transition-colors">Time</label>
                <div className="relative">
                  <select 
                    name="time"
                    required
                    className="w-full bg-black/40 text-white p-3 border-b border-gray-700 focus:border-muglan-gold outline-none transition-colors appearance-none cursor-pointer"
                    onChange={handleChange}
                  >
                    <option value="" className="text-gray-500">Select Time</option>
                    {[17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21].map(t => (
                        <option key={t} value={t} className="bg-muglan-charcoal text-white">
                            {Math.floor(t)}:{t % 1 === 0 ? '00' : '30'} PM
                        </option>
                    ))}
                  </select>
                  <Clock className="absolute right-3 top-3 text-gray-600 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mb-6 group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-muglan-gold transition-colors">Guests</label>
              <div className="relative">
                <select 
                  name="guests"
                  className="w-full bg-black/40 text-white p-3 border-b border-gray-700 focus:border-muglan-gold outline-none transition-colors appearance-none cursor-pointer"
                  onChange={handleChange}
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num} className="bg-muglan-charcoal text-white">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="9+" className="bg-muglan-charcoal text-white">Large Party (8+)</option>
                </select>
                <Users className="absolute right-3 top-3 text-gray-600 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="group">
                 <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-muglan-gold transition-colors">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-black/40 text-white p-3 border-b border-gray-700 focus:border-muglan-gold outline-none transition-colors placeholder-gray-700"
                  onChange={handleChange}
                />
              </div>
              <div className="group">
                 <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-muglan-gold transition-colors">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  className="w-full bg-black/40 text-white p-3 border-b border-gray-700 focus:border-muglan-gold outline-none transition-colors placeholder-gray-700"
                  onChange={handleChange}
                />
              </div>
               <div className="group">
                 <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-muglan-gold transition-colors">Special Requests (Optional)</label>
                <textarea 
                  name="specialRequests"
                  rows={2}
                  placeholder="Allergies, special occasions..."
                  className="w-full bg-black/40 text-white p-3 border-b border-gray-700 focus:border-muglan-gold outline-none transition-colors resize-none placeholder-gray-700"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative overflow-hidden group
                ${loading ? 'bg-gray-800 cursor-wait' : 'bg-white text-black hover:bg-muglan-gold hover:text-black'}`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                   <Loader className="w-4 h-4 animate-spin" /> Processing
                </div>
              ) : (
                'Confirm Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};