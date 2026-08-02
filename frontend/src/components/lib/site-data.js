export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export const MENU_CATEGORIES = ["All", "Bakery", "Mains", "Pizza", "Burgers", "Salads", "Drinks"];

export const MENU_ITEMS = [
  { id: 1, name: "Butter Croissant", category: "Bakery", price: 180, veg: true, desc: "Flaky, golden, hand-laminated with French-style butter", tag: "Chef's Pick" },
  { id: 2, name: "Pain au Chocolat", category: "Bakery", price: 200, veg: true, desc: "Double chocolate batons wrapped in crisp pastry dough" },
  { id: 3, name: "Sourdough Toast", category: "Bakery", price: 220, veg: true, desc: "24-hour fermented loaf, served with house whipped butter & jam" },
  { id: 4, name: "Banana Walnut Muffin", category: "Bakery", price: 160, veg: true, desc: "Moist banana muffin studded with toasted walnuts" },
  { id: 5, name: "Margherita Classica", category: "Pizza", price: 480, veg: true, desc: "San Marzano tomatoes, fior di latte, fresh basil, extra virgin olive oil", tag: "Most Loved" },
  { id: 6, name: "Burrata & Prosciutto", category: "Pizza", price: 620, veg: false, desc: "Creamy burrata, paper-thin prosciutto, wild rocket, balsamic glaze" },
  { id: 7, name: "Funghi Tartufo", category: "Pizza", price: 560, veg: true, desc: "Wild mushroom medley, truffle oil, fontina, caramelised onions" },
  { id: 8, name: "Diavola", category: "Pizza", price: 540, veg: false, desc: "Spicy Calabrian salami, chilli-spiked tomato, smoked mozzarella" },
  { id: 9, name: "Baba Burger", category: "Burgers", price: 520, veg: false, desc: "150g prime beef patty, aged cheddar, caramelised onion, house sauce", tag: "Signature" },
  { id: 10, name: "Crispy Portobello", category: "Burgers", price: 440, veg: true, desc: "Beer-battered portobello, smoked gouda, avocado, pickled jalapeño" },
  { id: 11, name: "Chicken Provençal", category: "Mains", price: 580, veg: false, desc: "Free-range chicken thigh, herbed tomato sauce, olives, capers, ratatouille" },
  { id: 12, name: "Gnocchi Gorgonzola", category: "Mains", price: 520, veg: true, desc: "Hand-rolled potato gnocchi, gorgonzola cream, toasted pine nuts, pear" },
  { id: 13, name: "Bouillabaisse", category: "Mains", price: 680, veg: false, desc: "Classic Provençal fisherman's stew with saffron aioli & crusty bread" },
  { id: 14, name: "Niçoise Salad", category: "Salads", price: 380, veg: false, desc: "Line-caught tuna, egg, green beans, olives, anchovy dressing" },
  { id: 15, name: "Burrata Caprese", category: "Salads", price: 420, veg: true, desc: "Heirloom tomatoes, creamy burrata, pesto, aged balsamic" },
  { id: 16, name: "Watermelon & Feta", category: "Salads", price: 340, veg: true, desc: "Chilled watermelon, feta crumble, mint, toasted pumpkin seeds" },
  { id: 17, name: "Cold Brew Coffee", category: "Drinks", price: 220, veg: true, desc: "18-hour steeped single origin, served over house-made coffee ice" },
  { id: 18, name: "Hibiscus Lemonade", category: "Drinks", price: 180, veg: true, desc: "House-pressed lemons, hibiscus shrub, fresh mint, soda" },
  { id: 19, name: "Mango Lassi", category: "Drinks", price: 160, veg: true, desc: "Alphonso mango, thick curd, cardamom, rose water" },
  { id: 20, name: "Affogato", category: "Drinks", price: 240, veg: true, desc: "Double espresso poured over vanilla bean gelato" },
];

export const TESTIMONIALS = [
  { name: "Priya M.", rating: 5, text: "The croissants rival anything I've had in Paris. The jungle ambiance and live guitar on Friday evenings make this my favourite spot in all of Goa.", location: "Mumbai" },
  { name: "James T.", rating: 5, text: "Stumbled upon Baba Au Rhum on a rainy afternoon. Left three hours later having had the best pizza of my India trip and made new friends.", location: "London" },
  { name: "Ananya R.", rating: 5, text: "Absolutely ethereal setting — fairy lights through the trees, the smell of baking bread, and a cold brew in hand. Pure magic.", location: "Bangalore" },
  { name: "Marco V.", rating: 5, text: "As an Italian, I was sceptical. The gnocchi proved me completely wrong. Proper Italian soul with a beautiful Goan spirit.", location: "Milan" },
  { name: "Sarah K.", rating: 5, text: "The staff remember your name on your second visit. That kind of warmth is rare. The burrata pizza is non-negotiable.", location: "Singapore" },
];

export const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&auto=format", alt: "Rustic cafe interior with warm lighting", tall: true },
  { id: 2, url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format", alt: "Wood-fired pizza with fresh basil", tall: false },
  { id: 3, url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop&auto=format", alt: "Fresh croissants from the bakery", tall: true },
  { id: 4, url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop&auto=format", alt: "Beautifully plated main course", tall: false },
  { id: 5, url: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=600&h=400&fit=crop&auto=format", alt: "Open-air dining area under the trees", tall: false },
  { id: 6, url: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&h=800&fit=crop&auto=format", alt: "Live music evening at the cafe", tall: true },
  { id: 7, url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&fit=crop&auto=format", alt: "Fresh salads and antipasti spread", tall: false },
  { id: 8, url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&auto=format", alt: "Morning coffee ritual", tall: false },
  { id: 9, url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop&auto=format", alt: "Artisan pizza close-up", tall: true },
  { id: 10, url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop&auto=format", alt: "Freshly baked pastries on display", tall: false },
  { id: 11, url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop&auto=format", alt: "Craft cocktails at golden hour", tall: false },
  { id: 12, url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=800&fit=crop&auto=format", alt: "Lush jungle garden surroundings", tall: true },
];

export const GOOGLE_REVIEWS = [
  { name: "Rohan Sharma", rating: 5, date: "March 2025", text: "Visited on a whim and left completely enchanted. The Margherita pizza has an impossibly light crust and the ambiance under those fairy lights is something else entirely. Will be back every trip to Goa.", avatar: "RS" },
  { name: "Emily Chen", rating: 5, date: "February 2025", text: "Best croissants outside of France, no contest. The sourdough toast with their house jam is a revelation for breakfast. And the cold brew — perfect.", avatar: "EC" },
  { name: "Vikram Nair", rating: 5, date: "January 2025", text: "Came for lunch, stayed for sunset. The chicken Provençal is incredible and the team goes out of their way to make you feel at home. Hidden gem.", avatar: "VN" },
  { name: "Isabelle Dubois", rating: 5, date: "December 2024", text: "Je cherchais un vrai café français en Inde et j'ai trouvé quelque chose d'encore mieux. L'ambiance, la nourriture, tout est parfait.", avatar: "ID" },
  { name: "Alex Fernandez", rating: 5, date: "November 2024", text: "The live music Friday nights are magical. Sat under the stars with a glass of wine and listened to a guitarist play Bossa Nova. Pure Goa.", avatar: "AF" },
];
