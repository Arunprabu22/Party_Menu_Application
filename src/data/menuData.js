// Static menu data.
// NOTE: Replace `menuItems` below with the real Initial Data JSON (Section 8
// of the spec, rfcd.json) — keep the field names exactly as they are here.
// filterMenuItems() and getMenuItemById() will keep working unchanged.

export const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka Skewers",
    category: "starter",
    isVeg: true,
    description: "Char-grilled paneer cubes marinated in smoky spiced yogurt.",
    fullDescription:
      "Cubes of fresh paneer marinated overnight in a smoky, spiced yogurt blend, threaded onto skewers with bell peppers and onions, then char-grilled until edges crisp. A party favourite served with mint chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    ingredients: [
      { name: "Paneer", quantity: "300 g" },
      { name: "Hung curd", quantity: "1/2 cup" },
      { name: "Bell peppers", quantity: "2" },
      { name: "Tikka masala", quantity: "2 tbsp" },
    ],
    servings: "For 4 people",
  },
  {
    id: 2,
    name: "Chicken 65",
    category: "starter",
    isVeg: false,
    description: "Deep-fried curry-leaf chicken bites with a fiery red glaze.",
    fullDescription:
      "Bite-sized chicken pieces marinated in ginger-garlic and red chilli, deep-fried until crisp, then tossed with curry leaves, mustard seeds and a tangy chilli glaze. A South Indian party classic.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600",
    ingredients: [
      { name: "Boneless chicken", quantity: "500 g" },
      { name: "Curry leaves", quantity: "1 sprig" },
      { name: "Red chilli powder", quantity: "1 tbsp" },
      { name: "Corn flour", quantity: "3 tbsp" },
    ],
    servings: "For 4 people",
  },
  {
    id: 3,
    name: "Butter Chicken",
    category: "main",
    isVeg: false,
    description: "Tandoori chicken simmered in a velvety tomato-butter gravy.",
    fullDescription:
      "Tandoor-roasted chicken finished in a rich, velvety tomato and butter gravy rounded out with cream and a pinch of kasuri methi. Best paired with butter naan or steamed rice.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: [
      { name: "Chicken thighs", quantity: "600 g" },
      { name: "Tomato puree", quantity: "1 cup" },
      { name: "Butter", quantity: "50 g" },
      { name: "Cream", quantity: "1/4 cup" },
    ],
    servings: "For 5 people",
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    category: "main",
    isVeg: true,
    description: "Soft paneer cubes in a rich, mildly sweet tomato gravy.",
    fullDescription:
      "Soft paneer cubes simmered in a rich, mildly sweet tomato-cashew gravy finished with a swirl of cream. A crowd-pleasing vegetarian main for any gathering.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    ingredients: [
      { name: "Paneer", quantity: "400 g" },
      { name: "Cashews", quantity: "10" },
      { name: "Tomato puree", quantity: "1 cup" },
      { name: "Fresh cream", quantity: "3 tbsp" },
    ],
    servings: "For 4 people",
  },
  {
    id: 5,
    name: "Mutton Rogan Josh",
    category: "main",
    isVeg: false,
    description: "Slow-cooked mutton in an aromatic Kashmiri red-chilli gravy.",
    fullDescription:
      "Tender mutton pieces slow-cooked with Kashmiri red chilli, fennel and a blend of whole spices until the gravy turns deep red and richly aromatic. A festive centrepiece dish.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
    ingredients: [
      { name: "Mutton", quantity: "700 g" },
      { name: "Kashmiri chilli", quantity: "3 tbsp" },
      { name: "Fennel powder", quantity: "1 tbsp" },
      { name: "Yogurt", quantity: "1/2 cup" },
    ],
    servings: "For 6 people",
  },
  {
    id: 6,
    name: "Veg Biryani",
    category: "main",
    isVeg: true,
    description: "Fragrant basmati rice layered with spiced mixed vegetables.",
    fullDescription:
      "Long-grain basmati rice layered and dum-cooked with a medley of spiced vegetables, fried onions and saffron. Served with raita on the side.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups" },
      { name: "Mixed vegetables", quantity: "2 cups" },
      { name: "Fried onions", quantity: "1/2 cup" },
      { name: "Saffron", quantity: "a pinch" },
    ],
    servings: "For 6 people",
  },
  {
    id: 7,
    name: "Garlic Naan",
    category: "sides",
    isVeg: true,
    description: "Pillowy tandoor-baked flatbread brushed with garlic butter.",
    fullDescription:
      "Soft, pillowy leavened flatbread baked in a tandoor until lightly charred, then brushed with garlic butter and fresh coriander. Ideal alongside any curry.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
    ingredients: [
      { name: "Refined flour", quantity: "2 cups" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Yogurt", quantity: "1/4 cup" },
    ],
    servings: "For 4 people",
  },
  {
    id: 8,
    name: "Boondi Raita",
    category: "sides",
    isVeg: true,
    description: "Cooling spiced yogurt studded with crisp fried gram-flour drops.",
    fullDescription:
      "Whisked yogurt tempered with roasted cumin and studded with crisp fried boondi. A cooling side that balances out the richer, spicier dishes on the table.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    ingredients: [
      { name: "Yogurt", quantity: "2 cups" },
      { name: "Boondi", quantity: "1/2 cup" },
      { name: "Roasted cumin powder", quantity: "1 tsp" },
    ],
    servings: "For 4 people",
  },
  {
    id: 9,
    name: "Tandoori Mushroom",
    category: "sides",
    isVeg: true,
    description: "Char-roasted mushrooms in a smoky tandoori marinade.",
    fullDescription:
      "Whole button mushrooms marinated in a smoky tandoori spice blend and roasted until edges caramelise. A lighter vegetarian side with a big flavour hit.",
    image: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=600",
    ingredients: [
      { name: "Button mushrooms", quantity: "300 g" },
      { name: "Hung curd", quantity: "1/3 cup" },
      { name: "Tandoori masala", quantity: "1.5 tbsp" },
    ],
    servings: "For 3 people",
  },
  {
    id: 10,
    name: "Chicken Seekh Kebab",
    category: "sides",
    isVeg: false,
    description: "Minced chicken skewers spiced and grilled over open flame.",
    fullDescription:
      "Minced chicken blended with ginger, green chilli and garam masala, shaped onto skewers and grilled over an open flame until smoky and juicy.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600",
    ingredients: [
      { name: "Chicken mince", quantity: "400 g" },
      { name: "Green chilli", quantity: "2" },
      { name: "Garam masala", quantity: "1 tbsp" },
    ],
    servings: "For 4 people",
  },
  {
    id: 11,
    name: "Gulab Jamun",
    category: "desert",
    isVeg: true,
    description: "Warm milk-solid dumplings soaked in rose-cardamom syrup.",
    fullDescription:
      "Soft, deep-fried milk-solid dumplings soaked in a warm rose and cardamom-scented sugar syrup. A festive dessert staple served warm.",
    image: "https://images.unsplash.com/photo-1601303516361-8a4c0b4b7e93?w=600",
    ingredients: [
      { name: "Khoya", quantity: "200 g" },
      { name: "Sugar", quantity: "1.5 cups" },
      { name: "Cardamom", quantity: "4 pods" },
    ],
    servings: "For 6 people",
  },
  {
    id: 12,
    name: "Rasmalai",
    category: "desert",
    isVeg: true,
    description: "Soft cottage-cheese discs soaked in saffron-pistachio milk.",
    fullDescription:
      "Delicate cottage-cheese discs simmered until spongy, then chilled and soaked in a saffron and cardamom-infused reduced milk, finished with slivered pistachios.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=600",
    ingredients: [
      { name: "Paneer", quantity: "250 g" },
      { name: "Full-fat milk", quantity: "1 litre" },
      { name: "Saffron", quantity: "a pinch" },
      { name: "Pistachios", quantity: "2 tbsp" },
    ],
    servings: "For 5 people",
  },
  {
    id: 13,
    name: "Gajar Ka Halwa",
    category: "desert",
    isVeg: true,
    description: "Slow-cooked carrot pudding rich with ghee, milk and nuts.",
    fullDescription:
      "Grated carrots slow-cooked in full-fat milk and ghee until deeply reduced, sweetened and finished with a generous handful of roasted nuts. A comforting winter party dessert.",
    image: "https://images.unsplash.com/photo-1631206753348-db44968fd440?w=600",
    ingredients: [
      { name: "Carrots", quantity: "1 kg" },
      { name: "Full-fat milk", quantity: "1 litre" },
      { name: "Ghee", quantity: "3 tbsp" },
      { name: "Mixed nuts", quantity: "1/4 cup" },
    ],
    servings: "For 6 people",
  },
  {
    id: 14,
    name: "Hara Bhara Kebab",
    category: "starter",
    isVeg: true,
    description: "Pan-fried spinach and green pea patties with a crisp crust.",
    fullDescription:
      "Mashed spinach, green peas and potato bound with spices and shallow-fried until golden with a crisp crust and a soft, herby centre.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    ingredients: [
      { name: "Spinach", quantity: "2 cups" },
      { name: "Green peas", quantity: "1 cup" },
      { name: "Potato", quantity: "2" },
    ],
    servings: "For 4 people",
  },
  {
    id: 15,
    name: "Fish Amritsari",
    category: "starter",
    isVeg: false,
    description: "Crisp carom-seed battered fish fritters, Punjabi-style.",
    fullDescription:
      "Boneless fish fillets marinated in ajwain, ginger-garlic and gram flour batter, then deep-fried until golden and crisp on the outside, flaky within.",
    image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=600",
    ingredients: [
      { name: "Fish fillets", quantity: "400 g" },
      { name: "Gram flour", quantity: "1/2 cup" },
      { name: "Carom seeds", quantity: "1 tsp" },
    ],
    servings: "For 4 people",
  },
  {
    id: 16,
    name: "Jeera Rice",
    category: "sides",
    isVeg: true,
    description: "Fluffy basmati rice tempered with roasted cumin and ghee.",
    fullDescription:
      "Long-grain basmati rice tempered in ghee with roasted cumin seeds and whole spices, steamed until light and fluffy. A simple, essential side.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600",
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups" },
      { name: "Cumin seeds", quantity: "1 tsp" },
      { name: "Ghee", quantity: "2 tbsp" },
    ],
    servings: "For 5 people",
  },
];

export const filterMenuItems = ({ category, name, diet } = {}) => {
  return menuItems.filter((item) => {
    const matchesCategory =
      !category || category === "all" || item.category === category;

    const matchesName =
      !name || item.name.toLowerCase().includes(name.trim().toLowerCase());

    const matchesDiet =
      !diet ||
      diet === "all" ||
      (diet === "veg" && item.isVeg) ||
      (diet === "nonveg" && !item.isVeg);

    return matchesCategory && matchesName && matchesDiet;
  });
};

export const getMenuItemById = (id) =>
  menuItems.find((item) => String(item.id) === String(id));
