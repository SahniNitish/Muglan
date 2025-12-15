import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Muglan Special Momo',
    description: 'Steamed dumplings filled with spiced minced chicken, served with homemade sesame chutney.',
    price: 12,
    category: 'starters',
    isChefSpecial: true,
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    name: 'Vegetable Samosa Chat',
    description: 'Crispy pastry filled with spiced potatoes and peas, topped with yogurt, tamarind, and mint chutney.',
    price: 10,
    category: 'starters',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    name: 'Chilli Chicken',
    description: 'Crispy fried chicken tossed in a spicy, tangy Indo-Chinese sauce with bell peppers and onions.',
    price: 14,
    category: 'starters',
    isSpicy: true,
    image: 'https://picsum.photos/400/300?random=3'
  },
  // Mains
  {
    id: '4',
    name: 'Traditional Butter Chicken',
    description: 'Tandoor-cooked chicken simmered in a rich, creamy tomato and cashew nut sauce.',
    price: 22,
    category: 'mains',
    isChefSpecial: true,
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: '5',
    name: 'Himalayan Goat Curry',
    description: 'Slow-cooked goat meat with bone, prepared with traditional Nepalese herbs and spices.',
    price: 24,
    category: 'mains',
    isSpicy: true,
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: '6',
    name: 'Paneer Tikka Masala',
    description: 'Cottage cheese cubes grilled and cooked in a spiced tomato gravy.',
    price: 20,
    category: 'mains',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: '7',
    name: 'Dal Bhat Tarkari',
    description: 'Authentic Nepalese platter with lentil soup, rice, and seasonal vegetable curry.',
    price: 26,
    category: 'mains',
    isVeg: true,
    isChefSpecial: true,
    image: 'https://picsum.photos/400/300?random=7'
  },
  // Sides
  {
    id: '8',
    name: 'Garlic Naan',
    description: 'Leavened bread topped with chopped garlic and cilantro, baked in a clay oven.',
    price: 5,
    category: 'sides',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=8'
  },
  {
    id: '9',
    name: 'Saffron Basmati Rice',
    description: 'Aromatic basmati rice infused with saffron strands.',
    price: 6,
    category: 'sides',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=9'
  },
  // Drinks
  {
    id: '10',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink blended with sweet mango pulp.',
    price: 7,
    category: 'drinks',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: '11',
    name: 'Masala Chai',
    description: 'Traditional spiced tea brewed with milk and aromatic herbs.',
    price: 5,
    category: 'drinks',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=11'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Food Blogger',
    content: 'The most authentic Nepalese cuisine I have had outside of Kathmandu. The Momos are to die for!',
    rating: 5
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Local Guide',
    content: 'Excellent service and atmosphere. The Butter Chicken is rich and creamy, perfect for a family dinner.',
    rating: 5
  },
  {
    id: '3',
    name: 'Priya Patel',
    role: 'Regular Customer',
    content: 'I love the spicy Goat Curry. It reminds me of home cooking. Highly recommended!',
    rating: 4
  }
];