export type MenuKind = "food" | "drinks";

export type MenuItem = {
  name: string;
  price: string;
  detail?: string;
  featured?: boolean;
};

export type MenuGroup = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  kind: MenuKind;
  title: string;
  short: string;
  eyebrow: string;
  note?: string;
  dense?: boolean;
  groups: MenuGroup[];
};

export const MENU: MenuSection[] = [
  {
    id: "breakfast",
    kind: "food",
    title: "Breakfast",
    short: "Breakfast",
    eyebrow: "Morning selection",
    groups: [
      {
        items: [
          {
            name: "English Breakfast",
            price: "₦15,000",
            detail:
              "Bacon, grilled tomatoes and mushrooms, sausage, cereal of choice, a glass of juice, two slices of toast, and a sunny-side egg.",
            featured: true,
          },
          { name: "Continental Breakfast", price: "₦12,000" },
          { name: "Liver Sauce", price: "₦12,000" },
          { name: "Egg Sauce / Fish Sauce", price: "₦5,000" },
          { name: "Noodles (Indomie)", price: "₦5,000" },
          { name: "Grilled Sausage", price: "₦5,000" },
          {
            name: "Cornflakes / Fruits & Fiber / Rice Krispies",
            price: "₦3,000",
          },
        ],
      },
      {
        title: "Nigerian breakfast",
        items: [
          { name: "Boiled Yam with Egg or Fish Sauce", price: "₦10,000" },
          { name: "Unripe Plantain with Egg or Fish Sauce", price: "₦10,000" },
          { name: "Sweet Potato with Egg or Corned Beef Sauce", price: "₦10,000" },
          { name: "Noodles (Indomie) and Egg", price: "₦10,000" },
        ],
      },
    ],
  },
  {
    id: "starters",
    kind: "food",
    title: "Appetizers & starters",
    short: "Starters",
    eyebrow: "To begin",
    groups: [
      {
        title: "Hot soups",
        items: [
          { name: "Cream of Chicken Soup", price: "₦10,000" },
          { name: "Cream of Mushroom Soup", price: "₦10,000" },
          { name: "Cream of Vegetable Soup", price: "₦10,000" },
          { name: "Sweetcorn Soup", price: "₦10,000" },
          { name: "Carrot / Tomato Soup", price: "₦10,000" },
          { name: "Minestrone Soup", price: "₦10,000" },
        ],
      },
      {
        title: "Gourmet salads",
        note: "Freshly prepared. ₦10,000 each.",
        items: [
          { name: "Russian Salad", price: "₦10,000" },
          { name: "Vegetable Salad", price: "₦10,000" },
          { name: "Chicken Salad", price: "₦10,000" },
          { name: "Rainbow Salad", price: "₦10,000" },
          { name: "Egg Mayonnaise Salad", price: "₦10,000" },
          { name: "Grilled Salad", price: "₦10,000" },
          { name: "Chef Special Salad", price: "₦10,000" },
        ],
      },
    ],
  },
  {
    id: "mains-rice",
    kind: "food",
    title: "Rice & specialties",
    short: "Rice",
    eyebrow: "From the kitchen",
    note: "Snail, turkey, or dry fish with these plates adds ₦5,000.",
    groups: [
      {
        items: [
          { name: "Shredded Chicken or Beef with Basmati Rice", price: "₦25,000" },
          { name: "Oven Chicken Curry with Basmati Rice", price: "₦25,000" },
          { name: "Jambalaya Rice with Grilled Chicken", price: "₦25,000" },
          { name: "Chinese Fried Rice with Grilled King Prawns", price: "₦25,000" },
          {
            name: "BON Stino Special Fried Rice",
            price: "₦25,000",
            detail: "Served with mixed grilled sauce.",
          },
          { name: "Pineapple Rice with Grilled Chicken", price: "₦30,000" },
          { name: "Oriental Rice with Chicken Highlander", price: "₦25,000" },
          { name: "Japanese Rice with Southern Fried Chicken", price: "₦30,000" },
          {
            name: "Coconut, Jollof, or Fried Rice",
            price: "₦25,000",
            detail: "With a choice of protein.",
          },
          { name: "Steamed White Rice with Sweet & Sour Sauce", price: "₦20,000" },
          {
            name: "Steamed Rice with Native Stew",
            price: "₦20,000",
            detail: "With a choice of protein.",
          },
        ],
      },
    ],
  },
  {
    id: "mains-pasta",
    kind: "food",
    title: "Pasta & international",
    short: "Pasta",
    eyebrow: "From the kitchen",
    groups: [
      {
        items: [
          {
            name: "Spaghetti Carbonara",
            price: "₦25,000",
            detail: "With a choice of protein.",
          },
          {
            name: "Spaghetti Bolognese",
            price: "₦25,000",
            detail: "With a choice of protein.",
          },
          { name: "Alfredo Pasta with Creamy Chicken Sauce", price: "₦25,000" },
          {
            name: "Seafood Pasta",
            price: "₦25,000",
            detail: "Premium ocean blend.",
          },
          {
            name: "Jollof Spaghetti",
            price: "₦20,000",
            detail: "With a choice of protein.",
          },
          {
            name: "Chicken Casserole",
            price: "₦25,000",
            detail: "With Singapore noodles or basmati rice.",
          },
          { name: "Butterfly Prawns with Mashed Potato", price: "₦30,000" },
          {
            name: "Chicken & Chips",
            price: "₦25,000",
            detail: "With coleslaw and dip.",
          },
          { name: "Chicken Fricassee with Sunshine Potatoes", price: "₦25,000" },
          { name: "Potato Wedges with Chicken Escalope", price: "₦25,000" },
          {
            name: "Mashed Potatoes with Mixed Grill Sauce",
            price: "₦35,000",
            detail: "Served with a side of Russian salad.",
            featured: true,
          },
        ],
      },
    ],
  },
  {
    id: "nigerian-soups",
    kind: "food",
    title: "Local Nigerian soups",
    short: "Soups",
    eyebrow: "Swallow & soup",
    note: "Soups come with protein and a swallow of your choice. Snail, turkey, or dry fish adds ₦5,000.",
    groups: [
      {
        title: "Pepper soups",
        items: [
          { name: "Catfish Pepper Soup, full portion", price: "₦25,000" },
          { name: "Catfish Pepper Soup, small portion", price: "₦10,000" },
          { name: "Goat Meat, Chicken, or Cow Leg Pepper Soup", price: "₦10,000" },
          { name: "Cow Tail or Cow Head Pepper Soup", price: "₦10,000" },
        ],
      },
      {
        title: "Native soups",
        items: [
          {
            name: "Banga Soup",
            price: "₦25,000",
            detail:
              "Delta-style palm-fruit soup with beletete leaves, aidon spices, and dried shrimps.",
          },
          {
            name: "Owho Soup",
            price: "₦20,000",
            detail:
              "Urhobo delicacy of palm oil and native potash, cooked into a thick creamy soup.",
          },
          {
            name: "Edikaikong Soup",
            price: "₦25,000",
            detail:
              "Waterleaf and pumpkin leaf with diced kpomo, periwinkles, stockfish, and palm oil.",
          },
          {
            name: "White Soup",
            price: "₦25,000",
            detail:
              "Tilapia, barracuda, snail, prawns, crab, periwinkle, calamari, and ngolo.",
          },
          {
            name: "BON Stino Special Fisherman Soup",
            price: "₦35,000",
            featured: true,
          },
          { name: "Seafood Okra Soup", price: "₦30,000" },
          { name: "Bitter Leaf Soup", price: "₦20,000" },
          { name: "Afang Soup", price: "₦20,000" },
          { name: "Ogbono Soup", price: "₦20,000" },
          { name: "Okro Soup", price: "₦20,000" },
          { name: "Egusi Soup", price: "₦20,000" },
          { name: "Oha Soup", price: "₦20,000" },
          {
            name: "Vegetable Soup",
            price: "₦20,000",
            detail: "Served with a choice of protein.",
          },
        ],
      },
    ],
  },
  {
    id: "local-mains",
    kind: "food",
    title: "Traditional specialties",
    short: "Traditional",
    eyebrow: "House plates",
    groups: [
      {
        items: [
          { name: "Isi-Ewu", price: "₦25,000", detail: "Spiced goat head, the traditional way." },
          { name: "Nkwobi", price: "₦15,000" },
          { name: "African Salad", price: "₦15,000" },
          { name: "Native Rice and Stew", price: "₦20,000" },
          { name: "Plantain Porridge", price: "₦20,000", detail: "With a choice of protein." },
          { name: "Grilled Croaker or Tilapia with Chips", price: "₦30,000" },
          { name: "Grilled King Prawns with Chips", price: "₦25,000" },
        ],
      },
    ],
  },
  {
    id: "grills-pizza",
    kind: "food",
    title: "Grills, pizza & bites",
    short: "Grill & pizza",
    eyebrow: "From the grill",
    groups: [
      {
        items: [
          {
            name: "Seafood Platter",
            price: "₦75,000",
            detail: "House special. A full platter for the table.",
            featured: true,
          },
          { name: "Sirloin, T-Bone, or Fillet Steak", price: "₦25,000" },
          {
            name: "Barbecue Croaker",
            price: "₦25,000",
            detail: "With salad, plantain, and fries.",
          },
          { name: "Whole Chicken Barbecue", price: "₦35,000" },
          { name: "Beef Kebab or Chicken Kebab", price: "₦15,000" },
        ],
      },
      {
        title: "Stone-baked pizza",
        items: [
          {
            name: "Chicken Pizza",
            price: "₦25,000",
            detail:
              "Tomato sauce, mozzarella, hot chili, house spice, and caramelized red onion.",
          },
          { name: "Special BON Stino Pizza", price: "₦30,000", featured: true },
        ],
      },
      {
        title: "Light bites & burgers",
        items: [
          { name: "Club Sandwich or Egg Sandwich", price: "₦10,000" },
          { name: "Beef or Chicken Burger", price: "₦10,000" },
          { name: "Chicken or Beef Shawarma", price: "₦10,000" },
        ],
      },
      {
        title: "Barbecue catch",
        items: [
          {
            name: "Catfish Barbecue",
            price: "Small ₦20,000 · Medium ₦25,000 · Large ₦30,000",
          },
          {
            name: "Tilapia Barbecue",
            price: "Small ₦30,000 · Medium ₦40,000 · Large ₦50,000",
          },
          { name: "Peppered Snail or Turkey", price: "₦15,000" },
          { name: "Peppered Goat Meat", price: "₦15,000" },
          { name: "Peppered Gizzard", price: "₦15,000" },
          { name: "Peppered Croaker", price: "₦15,000" },
          { name: "Peppered Beef or Chicken", price: "₦10,000" },
        ],
      },
    ],
  },
  {
    id: "sides",
    kind: "food",
    title: "Extra sides",
    short: "Sides",
    eyebrow: "Add to the plate",
    dense: true,
    groups: [
      {
        items: [
          { name: "Extra Rice", price: "₦5,000", detail: "Jollof or steamed." },
          {
            name: "Extra Plantain, Fries, Salad, Soup, or Swallow",
            price: "₦5,000",
          },
          { name: "Extra Turkey, Snail, or Dry Fish", price: "₦15,000" },
          {
            name: "Extra Chicken, Beef, Goat, Cow Leg, Tail, or Head",
            price: "₦10,000",
          },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    kind: "drinks",
    title: "Craft cocktails",
    short: "Cocktails",
    eyebrow: "The bar",
    groups: [
      {
        items: [
          {
            name: "Long Island Iced Tea",
            price: "₦12,000",
            detail: "Vodka, tequila, gin, Bacardi, triple sec, and lime, topped with Coke.",
            featured: true,
          },
          {
            name: "Sex on the Beach",
            price: "₦10,000",
            detail: "Orange juice, vodka, triple sec, and grenadine.",
          },
          {
            name: "Tequila Sunrise",
            price: "₦10,000",
            detail: "Tequila, orange juice, and grenadine.",
          },
          {
            name: "A.M.F.",
            price: "₦8,000",
            detail: "Vodka, tequila, gin, Bacardi, triple sec, and blue curaçao.",
          },
          {
            name: "Whiskey Sour",
            price: "₦8,000",
            detail: "Whiskey, lemon juice, simple syrup, and egg white.",
          },
        ],
      },
      {
        title: "Classic mixes",
        note: "₦7,000 each.",
        items: [
          { name: "Tsunami", price: "₦7,000" },
          { name: "Piña Colada", price: "₦7,000" },
          { name: "Classic Margarita", price: "₦7,000" },
          { name: "Blue Margarita", price: "₦7,000" },
          { name: "Strawberry Daiquiri", price: "₦7,000" },
          { name: "Apple Rush", price: "₦7,000" },
          { name: "Screaming Orgasm", price: "₦7,000" },
          { name: "Mojito", price: "₦7,000" },
        ],
      },
    ],
  },
  {
    id: "mocktails-shakes",
    kind: "drinks",
    title: "Mocktails & milkshakes",
    short: "Mocktails",
    eyebrow: "Without the spirit",
    groups: [
      {
        title: "Mocktails",
        items: [
          { name: "Apple Fresh or Passion Fresh", price: "₦6,000" },
          { name: "Malibu Sunset or Virgin Colada", price: "₦6,000" },
          { name: "Virgin Mojito", price: "₦6,000" },
          { name: "Signature Chapman", price: "₦5,000" },
        ],
      },
      {
        title: "Milkshakes",
        items: [
          { name: "Vanilla, Strawberry, or Chocolate", price: "₦7,000" },
          { name: "Baileys, Banana, or Avocado", price: "₦8,000" },
        ],
      },
    ],
  },
  {
    id: "smoothies-juices",
    kind: "drinks",
    title: "Smoothies & fresh juice",
    short: "Juices",
    eyebrow: "Pressed to order",
    dense: true,
    groups: [
      {
        items: [
          { name: "Mixed Fruit Smoothie", price: "₦7,000" },
          {
            name: "Watermelon, Banana, Pineapple, Avocado, or Apple Smoothie",
            price: "₦6,000",
          },
          { name: "Fresh Lemonade or Mixed Blend Juice", price: "₦4,000" },
          { name: "Watermelon, Pineapple, or Orange Juice", price: "₦3,000" },
        ],
      },
    ],
  },
  {
    id: "beers",
    kind: "drinks",
    title: "Cold beers",
    short: "Beers",
    eyebrow: "From the fridge",
    groups: [
      {
        items: [
          { name: "Heineken (big), Legend, or Guinness Stout", price: "₦3,000" },
          {
            name: "Other bottled beers & cans",
            price: "₦2,500",
            detail:
              "Heineken medium, Budweiser, Star, Trophy, Hero, Desperado, Gulder, Goldberg, Origin, Star Radler, Smirnoff Ice, Smirnoff Ice Black or White, Life, and 33.",
          },
        ],
      },
    ],
  },
  {
    id: "soft-energy",
    kind: "drinks",
    title: "Soft drinks & energy",
    short: "Soft drinks",
    eyebrow: "From the fridge",
    dense: true,
    groups: [
      {
        items: [
          { name: "Cranberry Juice, large bottle", price: "₦10,000" },
          { name: "5 Alive Berry Blast or V-Smartic", price: "₦5,000" },
          { name: "5 Alive Orange, Hollandia, Chi-Exotic, or Chivita", price: "₦4,000" },
          { name: "Black Bullet Energy", price: "₦4,000" },
          {
            name: "Red Bull, Blue Bullet, Power Horse, Monster, Vita Milk, or Pure Heaven",
            price: "₦3,000",
          },
          {
            name: "Maltina, Malta Guinness, Fayrouz, Fearless, Predator, Climax, Schweppes, or Cranberry can",
            price: "₦2,000",
          },
          {
            name: "Coke, Coke Zero, Fanta, Sprite, Teem Soda, or Aquafina",
            price: "₦1,000",
          },
        ],
      },
    ],
  },
  {
    id: "whisky",
    kind: "drinks",
    title: "Premium whiskies",
    short: "Whisky",
    eyebrow: "The cellar",
    dense: true,
    groups: [
      {
        title: "Glenfiddich",
        items: [
          { name: "Glenfiddich 23 Year Old", price: "₦1,150,000" },
          { name: "Glenfiddich 21 Year Old", price: "₦520,000" },
          { name: "Glenfiddich 18 Year Old", price: "₦360,000" },
          { name: "Glenfiddich Project XX", price: "₦250,000" },
          { name: "Glenfiddich 15 Year Old", price: "₦230,000" },
          { name: "Glenfiddich Orchard Experiment", price: "₦200,000" },
          { name: "Glenfiddich 12 Year Old", price: "₦150,000" },
        ],
      },
      {
        title: "Blended bottlings",
        items: [
          { name: "Johnnie Walker Blue Label", price: "₦800,000" },
          { name: "Johnnie Walker Gold Label", price: "₦170,000" },
          { name: "Johnnie Walker Black Label", price: "₦100,000" },
          { name: "Johnnie Walker Green Label", price: "₦90,000" },
          { name: "Jack Daniel’s, big", price: "₦65,000" },
          { name: "Johnnie Walker Red Label", price: "₦50,000" },
          { name: "Jameson Irish, large", price: "₦40,000" },
          { name: "Bains Single Grain", price: "₦35,000" },
          { name: "William Lawson", price: "₦30,000" },
          { name: "Jameson, small", price: "₦15,000" },
          { name: "Jack Daniel’s, small", price: "₦10,000" },
          {
            name: "Jameson Black Barrel",
            price: "Bottle ₦90,000 · Shot ₦5,000",
          },
        ],
      },
    ],
  },
  {
    id: "cognac-sparkling",
    kind: "drinks",
    title: "Cognac & champagne",
    short: "Cognac",
    eyebrow: "The cellar",
    dense: true,
    groups: [
      {
        title: "Cognac",
        items: [
          { name: "Hennessy XO", price: "₦800,000" },
          { name: "Rémy Martin XO", price: "₦780,000" },
          { name: "Hennessy VSOP", price: "₦300,000" },
          { name: "Martell Blue Swift", price: "₦215,000" },
          { name: "Rémy Martin VSOP", price: "₦200,000" },
          { name: "Martell VS", price: "₦130,000" },
          { name: "Hennessy VS, large", price: "₦105,000" },
          { name: "Hennessy VS, small", price: "₦30,000" },
        ],
      },
      {
        title: "Champagne",
        items: [
          { name: "Dom Pérignon", price: "₦800,000" },
          { name: "Moët & Chandon Rosé", price: "₦330,000" },
          { name: "Veuve Clicquot or Moët & Chandon Brut", price: "₦300,000" },
          { name: "Martini Rosé", price: "₦50,000" },
        ],
      },
    ],
  },
  {
    id: "wines-spirits",
    kind: "drinks",
    title: "Wine, tequila & gin",
    short: "Wine & spirits",
    eyebrow: "The cellar",
    groups: [
      {
        title: "Wine",
        items: [
          { name: "Eva Sparkling, non-alcoholic", price: "₦35,000" },
          { name: "Nederburg Red Reserve", price: "₦35,000" },
          { name: "Asconi Agor or Eisberg Sauvignon Blanc", price: "₦30,000" },
          { name: "4th Street Red, premium", price: "₦25,000" },
          { name: "Carlo Rossi Red or White", price: "₦22,000" },
          { name: "Four Cousins, Drostdy Hof, or 4th Street", price: "₦20,000" },
          { name: "Declan Rosé or Four Cousins Rosé", price: "₦18,000 – ₦20,000" },
          { name: "J&W, Chamdor, or Pure Heaven, non-alcoholic", price: "₦15,000" },
          { name: "A glass of wine", price: "₦6,000" },
        ],
      },
      {
        title: "Tequila, gin & vodka",
        items: [
          { name: "Don Julio Añejo", price: "₦420,000" },
          { name: "Hornitos Tequila", price: "Bottle ₦175,000 · Shot ₦4,000" },
          { name: "Bombay Sapphire", price: "Bottle ₦50,000 · Shot ₦4,000" },
          {
            name: "Camino or Olmeca Tequila",
            price: "Bottle ₦45,000 · Shot ₦2,000",
          },
          { name: "Absolut Vodka, big", price: "Bottle ₦45,000 · Shot ₦2,000" },
          {
            name: "Sierra, Malibu, or Captain Morgan",
            price: "Bottle ₦30,000 – ₦40,000",
          },
          { name: "Gordon’s Gin, big", price: "Bottle ₦15,000 · Shot ₦2,000" },
          { name: "Smirnoff Plain or Chocolate", price: "₦12,000 – ₦17,000" },
          {
            name: "Absolut small, Gordon’s small, Best Gin, or Magic Moment",
            price: "₦4,000 – ₦20,000",
          },
        ],
      },
    ],
  },
  {
    id: "bitters-hot",
    kind: "drinks",
    title: "Bitters, liqueurs & coffee",
    short: "Coffee & bitters",
    eyebrow: "To finish",
    groups: [
      {
        title: "Liqueurs & bitters",
        items: [
          { name: "American Honey", price: "₦55,000" },
          { name: "Baileys Original", price: "₦50,000" },
          { name: "Martini Rosso or Martini Dry", price: "₦40,000" },
          { name: "Kahlúa, Best Cream, or Origin Bitters, big", price: "₦25,000" },
          { name: "Action Bitters, big", price: "₦10,000" },
          {
            name: "Campari",
            price: "Big ₦50,000 · Medium ₦30,000 · Small ₦15,000",
          },
          {
            name: "Small bitters",
            price: "₦2,000 – ₦6,000",
            detail: "Origin, Best, Action, Ace, and Calypso.",
          },
        ],
      },
      {
        title: "Coffee & tea",
        items: [
          { name: "Cappuccino", price: "Double ₦6,000 · Single ₦5,000" },
          { name: "Espresso", price: "Double ₦5,000 · Single ₦3,000" },
          { name: "House pot of coffee or tea", price: "₦2,000" },
        ],
      },
    ],
  },
];

export function itemCount(section: MenuSection) {
  return section.groups.reduce((sum, group) => sum + group.items.length, 0);
}
