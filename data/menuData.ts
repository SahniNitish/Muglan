export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image_url: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Accompaniments",
    items: [
      {
        name: "Onion Salad",
        description: "Onion Salad is a simple and tangy side dish made with thinly sliced onions, often mixed with tomatoes, green chilies, and fresh herbs like cilantro.",
        price: 5.50,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/onionsalad-removebg-preview-300x225.png"
      },
      {
        name: "Green Salad",
        description: "Green Salad is a fresh and vibrant mix of crisp vegetables like lettuce, cucumbers, tomatoes, and carrots, tossed with a light dressing.",
        price: 5.50,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/green_salad-removebg-preview-300x225.png"
      },
      {
        name: "Muglan Mixed Pickle Achar",
        description: "Mixed Pickle Achar is a tangy and spicy condiment made from a blend of various vegetables and fruits, fermented with mustard oil, spices, and salt.",
        price: 4.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/output-onlinepngtools-2-300x225.png"
      }
    ]
  },
  {
    category: "Breakfast-Veg",
    items: [
      {
        name: "Omelette",
        description: "Omelette is a versatile dish made with whisked eggs, cooked to perfection, and often filled with flavorful ingredients like cheese, vegetables, or herbs.",
        price: 11.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/omelette-removebg-preview-300x225.png"
      },
      {
        name: "Poori Halwa",
        description: "Poori Halwa is a delightful combination of crispy, deep-fried bread (poori) served with sweet, aromatic halwa made from semolina or flour.",
        price: 12.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/purihalwa-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Appetizers-Veg",
    items: [
      {
        name: "Mix Pakora",
        description: "Mix Pakora is a popular deep-fried snack made with a variety of fresh vegetables like onions, potatoes, cauliflower, and spinach.",
        price: 9.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/mixpakora-removebg-preview-300x225.png"
      },
      {
        name: "Paneer Pakora",
        description: "Paneer Pakora is a crispy and flavorful appetizer made with cubes of fresh paneer (cottage cheese) coated in a spiced chickpea flour batter.",
        price: 12.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/paneerpakora-removebg-preview-300x225.png"
      },
      {
        name: "Chana Chat",
        description: "Chana Chat is a tangy and flavorful street food made with boiled chickpeas mixed with diced onions, tomatoes, and green chilies.",
        price: 8.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/chanachat-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Appetizers-Non Veg",
    items: [
      {
        name: "Fish Pakora",
        description: "Fish Pakora is a crispy and flavorful appetizer made with tender pieces of fish marinated in spices and coated in a seasoned chickpea flour batter.",
        price: 14.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/fishpakora-removebg-preview-300x225.png"
      },
      {
        name: "Chicken Pakora",
        description: "Chicken Pakora is a delicious deep-fried appetizer made with tender pieces of chicken marinated in aromatic spices and coated in a spiced chickpea flour batter.",
        price: 12.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/chickenpakora-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Main Course-Veg",
    items: [
      {
        name: "Dal Tadka",
        description: "Dal Tadka is a popular Indian lentil dish made with yellow lentils cooked until soft and creamy, then tempered with aromatic spices.",
        price: 12.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/daltadka-removebg-preview-300x225.png"
      },
      {
        name: "Palak Paneer",
        description: "Palak Paneer is a classic North Indian dish featuring tender cubes of paneer (cottage cheese) cooked in a creamy, vibrant spinach gravy.",
        price: 15.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/palakpaneer-removebg-preview-300x225.png"
      },
      {
        name: "Chana Masala",
        description: "Chana Masala is a hearty and flavorful dish made with chickpeas cooked in a rich, spiced tomato-onion gravy.",
        price: 13.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/chanamasala-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Main Course-Non Veg",
    items: [
      {
        name: "Chicken Curry",
        description: "Chicken Curry is a flavorful and aromatic dish made with tender pieces of chicken cooked in a rich, spiced gravy.",
        price: 16.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/chickencurry-removebg-preview-300x225.png"
      },
      {
        name: "Goat Curry",
        description: "Goat Curry is a rich and flavorful dish made with tender pieces of goat meat slow-cooked in a spiced, aromatic gravy.",
        price: 19.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/goatcurry-removebg-preview-300x225.png"
      },
      {
        name: "Fish Curry",
        description: "Fish Curry is a delicious and aromatic dish made with fresh fish cooked in a flavorful, spiced coconut or tomato-based gravy.",
        price: 17.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/fishcurry-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Rice & Biryani",
    items: [
      {
        name: "Vegetable Biryani",
        description: "Vegetable Biryani is a fragrant and flavorful rice dish made with basmati rice, mixed vegetables, and aromatic spices.",
        price: 14.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/vegbiryani-removebg-preview-300x225.png"
      },
      {
        name: "Chicken Biryani",
        description: "Chicken Biryani is a classic and aromatic rice dish made with tender marinated chicken pieces layered with fragrant basmati rice.",
        price: 17.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/chickenbiryani-removebg-preview-300x225.png"
      },
      {
        name: "Goat Biryani",
        description: "Goat Biryani is a rich and flavorful rice dish made with tender pieces of goat meat marinated in spices and layered with aromatic basmati rice.",
        price: 20.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/goatbiryani-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Bread",
    items: [
      {
        name: "Naan",
        description: "Naan is a soft and fluffy leavened flatbread, traditionally cooked in a tandoor oven, with a slightly charred exterior and pillowy interior.",
        price: 3.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/naan-removebg-preview-300x225.png"
      },
      {
        name: "Garlic Naan",
        description: "Garlic Naan is a flavorful variation of traditional naan, topped with minced garlic and fresh herbs, giving it a fragrant and savory taste.",
        price: 4.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/garlicnaan-removebg-preview-300x225.png"
      },
      {
        name: "Roti",
        description: "Roti is a simple, unleavened flatbread made from whole wheat flour, cooked on a griddle until soft and slightly puffed.",
        price: 2.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/roti-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        description: "Gulab Jamun is a beloved Indian sweet made from soft, spongy milk-based balls, deep-fried to a golden brown and soaked in fragrant sugar syrup.",
        price: 7.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/gulabjamun-removebg-preview-300x225.png"
      },
      {
        name: "Kheer",
        description: "Kheer is a traditional Indian rice pudding made by slowly cooking rice in milk until creamy, sweetened with sugar, and flavored with cardamom.",
        price: 6.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/kheer-removebg-preview-300x225.png"
      }
    ]
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Masala Chai",
        description: "Masala Chai is a spiced tea blend made with black tea, milk, sugar, and a mix of aromatic spices like cardamom, cinnamon, and ginger.",
        price: 3.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/masalachai-removebg-preview-300x225.png"
      },
      {
        name: "Lassi",
        description: "Lassi is a refreshing yogurt-based drink, available in sweet or savory varieties, often flavored with fruits, spices, or herbs.",
        price: 4.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/lassi-removebg-preview-300x225.png"
      },
      {
        name: "Fresh Juice",
        description: "Fresh Juice made from seasonal fruits, providing a healthy and refreshing beverage option with natural flavors and vitamins.",
        price: 5.99,
        image_url: "https://muglanrestaurant.com/wp-content/uploads/2025/01/freshjuice-removebg-preview-300x225.png"
      }
    ]
  }
];

export const getMenuData = () => menuData;
export const getMenuByCategory = (category: string) => 
  menuData.find(cat => cat.category.toLowerCase() === category.toLowerCase())?.items || [];