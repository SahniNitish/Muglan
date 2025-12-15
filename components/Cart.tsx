import React from 'react';
import { Minus, Plus, X, ShoppingBag, CreditCard } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
  category: string;
}

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const Cart: React.FC<CartProps> = ({ 
  cartItems, 
  updateQuantity, 
  removeItem, 
  onClose, 
  isOpen 
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    alert(`Thank you for your order! 

Order Summary:
${cartItems.map(item => `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

Total: $${total.toFixed(2)}

This is a demo - your order would be processed through a real payment system.`);
    
    // Clear cart after checkout
    cartItems.forEach(item => removeItem(item.id));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-muglan-dark shadow-2xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-muglan-gold" />
              <h2 className="text-xl font-serif text-white">Your Cart</h2>
              {totalItems > 0 && (
                <span className="bg-muglan-gold text-black text-sm px-2 py-1 rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-2">Add some delicious items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-muglan-charcoal rounded-lg p-4 border border-gray-800">
                    <div className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gray-700">
                        <img 
                          src={item.image_url} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-white text-sm font-medium">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <p className="text-gray-400 text-xs mb-3">{item.category}</p>
                        
                        {/* Quantity and Price */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3 text-white" />
                            </button>
                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-muglan-gold hover:bg-yellow-400 flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3 text-black" />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-muglan-gold font-serif font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-gray-500 text-xs">${item.price.toFixed(2)} each</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Total and Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-800 p-6 space-y-4">
              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (estimated)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-2">
                  <div className="flex justify-between text-white font-serif font-bold text-lg">
                    <span>Total</span>
                    <span className="text-muglan-gold">${(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-muglan-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </button>
              
              <p className="text-gray-500 text-xs text-center">
                * This is a demo checkout - no real payment will be processed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};