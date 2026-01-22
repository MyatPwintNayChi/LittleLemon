import dish from "../images/Spaghetti Bolognese.jpeg";
import dish2 from "../images/DijonChicken.jpeg";
import dish3 from "../images/Shakshuka.jpeg";
import dish4 from "../images/_ (4).jpeg";
import dish5 from "../images/Seafood Stew.jpeg";
import dish6 from "../images/Stuffed Salmon.jpeg";
import dish7 from "../images/stake.jpeg";
import dish8 from "../images/ Bruschetta.jpeg";
import dish9 from "../images/greeksalad.jpeg";
import dish10 from "../images/_ (5).jpeg";
import dish11 from "../images/Pistachio Tiramisu.jpeg";
import dish12 from "../images/Lemon Pudding.jpeg";
import dish13 from "../images/Zucchini Ratatouille Niçoise.jpeg";
import dish14 from "../images/Grilled Chicken Cobb Salad with Honey Dijon.jpeg";
import dish15 from "../images/Creamy Mushroom Chicken and Wild Rice Soup.jpeg";
import dish16 from "../images/Creamy Crab and Shrimp Seafood Bisque.jpeg";
import dish17 from "../images/Lemon Butter.jpeg";
import dish18 from "../images/chickenbowl.jpeg";
import dish19 from "../images/Creamy Mushroom and Spinach Stuffed Sweet Potatoes - Recipestasteful _ We're the secret ingredient for home cooks_.jpeg";
import dish20 from "../images/Grilled Halloumi Skewers with Lemon and Thyme.jpeg";
import dish21 from "../images/Pasta Primavera _ The Modern Proper.jpeg";
import dish22 from "../images/Nonna's Rustic Spaghetti Marinara.jpeg";
import dish23 from "../images/Roasted Rack of Lamb_ A Gourmet Guide to Perfect Cooking.jpeg";
import dish24 from "../images/Quick & Healthy Egg Muffins with Spinach and Feta.jpeg";
import dish25 from "../images/Yummy food😋😍.jpeg";
import dish26 from "../images/Grilled Lobster Tails with Lemon Herb Butter 🦞🍋.jpeg";
import dessert from "../images/Bavarian Cream_ Decadent Dessert Recipe _ Tasty Meals Blog.jpeg";
import dessert2 from "../images/Lemon Yuzu Posset with White Chocolate Crumble - between2kitchens.jpeg";
import dessert3 from "../images/PumpkinPie.jpeg";
import dessert4 from "../images/Chocolate Tiramisu.jpeg";
import dessert5 from "../images/Hazelnut Panna Cotta with Chocolate Ganache - Succulent Recipes.jpeg";
import dessert6 from "../images/Luscious Lemon-Lime Cherry Pistachio Cheesecake.jpeg";
import dessert7 from "../images/Sweet and Tangy Pickled Beets.jpeg";
import drink from "../images/Passion Fruit Margarita.jpeg";
import drink2 from "../images/Mexican Mimosa.jpeg";
import drink3 from "../images/Fruit Punch Mocktail Recipe.jpeg";
import drink4 from "../images/Easy Limoncello Spritz Recipe You’ll Want All Summer.jpeg";
import drink5 from "../images/Limonana (Middle Eastern Frozen Mint Lemonade Recipe).jpeg";
import drink6 from "../images/Frozen Mango Margarita - Coolinarco_com.jpeg";
import drink7 from "../images/The Bohemian.jpeg";
import water from "../images/water.jpeg";

const menuItems = [
  {
    id: 1,
    image: dish,
    title: "Spaghetti Bolognese",
    price: "$12.99",
    category: "Popular",
    description:
      "Classic Italian pasta with rich, meaty tomato sauce and fresh herbs.",
  },
  {
    id: 2,
    image: dish2,
    title: "Dijon Chicken",
    price: "$13.49",
    category: "Popular",
    description: "Tender chicken simmered in creamy Dijon mustard sauce.",
  },
  {
    id: 3,
    image: dish3,
    title: "Mexican-style Shashuka",
    price: "$11.99",
    category: "New",
    description: "Spicy tomato and pepper stew topped with poached eggs.",
  },
  {
    id: 4,
    image: dish4,
    title: "Sheet pan chicken",
    price: "$12.49",
    category: "Popular",
    description:
      "Oven-roasted chicken with vegetables, seasoned for a simple and tasty meal.",
  },
  {
    id: 5,
    image: dish5,
    title: "Seafood Stew",
    price: "$14.99",
    category: "New",
    description:
      "A hearty mix of fresh seafood simmered in a rich, flavorful broth.",
  },
  {
    id: 6,
    image: dish6,
    title: "Stuffed Salmon",
    price: "$15.99",
    category: "New",
    description:
      "Fresh salmon fillet filled with creamy spinach and herbs, baked to perfection.",
  },
  {
    id: 7,
    image: dish7,
    title: "Stake",
    price: "$13.99",
    category: "Popular",
    description: "Dense Bean Salad with Steak – Bold, Fresh & Filling",
  },
  {
    id: 8,
    image: dish8,
    title: "Bruschetta",
    price: "$6.99",
    category: "Dessert",
    description:
      "Grilled bread topped with garlic, tomatoes, olive oil, and fresh basil.",
  },
  {
    id: 9,
    image: dish9,
    title: "Greek Salad",
    price: "$12.99",
    category: "Popular",
    description:
      "A classic Greek salad with fresh veggies, feta cheese, and crunchy garlic croutons.",
  },
  {
    id: 10,
    image: dish10,
    title: "Crepes with strawberries and chocolate",
    price: "$9.99",
    category: "Dessert",
    description:
      "Soft crepes filled with fresh strawberries and drizzled with rich chocolate sauce.",
  },
  {
    id: 11,
    image: dish11,
    title: "Pistachio Tiramisu",
    price: "$8.99",
    category: "Dessert",
    description:
      "Creamy Italian dessert layered with pistachio, mascarpone, and coffee-soaked ladyfingers.",
  },
  {
    id: 12,
    image: dish12,
    title: "Lemon Pudding",
    price: "$7.99",
    category: "Dessert",
    description:
      "Light and refreshing dessert with a smooth, tangy lemon flavor.",
  },
  {
    id: 13,
    image: dish13,
    price: "$10.99",
    category: "Popular",
    description:
      "A flavorful blend of zucchini, eggplant, and peppers in a rich Provençal tomato sauce.",
    title: "Ratatouille",
  },
  {
    id: 14,
    image: dish14,
    price: "$14.99",
    category: "New",
    description:
      "A fresh mix of greens topped with grilled chicken, crispy bacon, avocado, egg, and blue cheese, served with creamy dressing.",
    title: "Ratatouille",
  },
  {
    id: 15,
    image: dish15,
    price: "$12.50",
    category: "Popular",
    description:
      "A comforting blend of tender chicken, wild rice, and mushrooms in a creamy, flavorful broth.",
    title: "Cramy Mushroom Chicken and Wild Rice Soup",
  },
  {
    id: 16,
    image: dish16,
    price: "$13.50",
    category: "New",
    description:
      "A rich and creamy bisque featuring succulent crab and shrimp, perfect for seafood lovers.",
    title: "Creamy Crab and Shrimp Seafood Bisque",
  },
  {
    id: 17,
    image: dish17,
    price: "$16.99",
    category: "Popular",
    description:
      "A quick and delicious meal with lemon butter salmon, crispy potatoes, and broccoli.",
    title: "Lemon Butter Salmon with Crispy Potatoes & Broccoli",
  },
  {
    id: 18,
    image: dish18,
    price: "$11.99",
    category: "Popular",
    description:
      "A wholesome bowl with grilled chicken, quinoa, fresh veggies, and a zesty lemon dressing.",
    title: "Grilled Chicken Quinoa Bowl",
  },
  {
    id: 19,
    image: dish19,
    price: "$10.49",
    category: "New",
    description:
      "Baked sweet potatoes stuffed with creamy mushroom and spinach filling, topped with melted cheese.",
    title: "Creamy Mushroom and Spinach Stuffed Sweet Potatoes",
  },
  {
    id: 20,
    image: dish20,
    price: "$9.99",
    category: "Popular",
    description:
      "Grilled halloumi cheese skewers marinated with lemon and thyme, served with a side of fresh salad.",
    title: "Grilled Halloumi Skewers with Lemon and Thyme",
  },
  {
    id: 21,
    image: dish21,
    price: "$12.99",
    category: "New",
    description:
      "A vibrant pasta dish loaded with fresh vegetables, tossed in a light garlic and olive oil sauce.",
    title: "Pasta Primavera",
  },
  {
    id: 22,
    image: dish22,
    price: "$11.99",
    category: "Popular",
    description:
      "A rustic spaghetti dish with a rich marinara sauce made from ripe tomatoes, garlic, and fresh basil.",
    title: "Rustic Spaghetti Marinara",
  },
  {
    id: 23,
    image: dish23,
    price: "$24.99",
    category: "New",
    description:
      "A succulent roasted rack of lamb seasoned with herbs and served with a side of garlic mashed potatoes.",
    title: "Roasted Rack of Lamb",
  },
  {
    id: 24,
    image: dish24,
    price: "$8.99",
    category: "Popular",
    description:
      "Healthy egg muffins packed with spinach, feta cheese, and cherry tomatoes, perfect for breakfast on the go.",
    title: "Egg Muffins with Spinach and Feta",
  },
  {
    id: 25,
    image: dish25,
    title: "Mediterranean Mezze Platter",
    price: "$14.99",
    category: "Popular",
    description:
      "A delightful assortment of hummus, baba ganoush, olives, feta cheese, and pita bread.",
  },
  {
    id: 26,
    image: dish26,
    title: "Grilled Lobster Tails with Lemon Herb Butter",
    price: "$29.99",
    category: "New",
    description:
      "Succulent lobster tails grilled to perfection and served with a side of lemon herb butter.",
  },
  {
    id: 27,
    image: dessert,
    title: "Bavarian Cream",
    price: "$6.99",
    category: "Dessert",
    description:
      "A smooth and creamy dessert made with vanilla custard and whipped cream, served with fresh berries.",
  },
  {
    id: 28,
    image: dessert2,
    title: "Lemon Yuzu Posset with White Chocolate Crumble",
    price: "$7.49",
    category: "Dessert",
    description:
      "A tangy and refreshing lemon yuzu posset topped with a crunchy white chocolate crumble.",
  },
  {
    id: 29,
    image: dessert3,
    title: "Pumpkin Cheesecake Bars",
    price: "$8.99",
    category: "Dessert",
    description:
      "Creamy pumpkin cheesecake layered on a graham cracker crust, perfect for fall.",
  },
  {
    id: 30,
    image: dessert4,
    title: "Chocolate Tiramisu",
    price: "$8.49",
    category: "Dessert",
    description:
      "A decadent twist on the classic tiramisu, made with layers of chocolate and coffee-soaked ladyfingers.",
  },
  {
    id: 31,
    image: dessert5,
    title: "Hazelnut Panna Cotta with Chocolate Ganache",
    price: "$7.99",
    category: "Dessert",
    description:
      "A silky hazelnut panna cotta topped with rich chocolate ganache and toasted hazelnuts.",
  },
  {
    id: 32,
    image: dessert6,
    title: "Lemon-Lime Cherry Pistachio Cheesecake",
    price: "$9.49",
    category: "Dessert",
    description:
      "A zesty lemon-lime cheesecake with a cherry topping and crunchy pistachio crust.",
  },
  {
    id: 33,
    image: dessert7,
    title: "Sweet and Tangy Pickled Beets",
    price: "$5.99",
    category: "Dessert",
    description:
      "A unique dessert featuring sweet and tangy pickled beets, perfect for a refreshing treat.",
  },
  {
    id: 34,
    image: drink,
    title: "Passion Fruit Margarita",
    price: "$8.99",
    category: "Drinks",
    description:
      "A tropical twist on the classic margarita with fresh passion fruit juice.",
  },
  {
    id: 35,
    image: drink2,
    title: "Mexican Mimosa",
    price: "$7.99",
    category: "Drinks",
    description:
      "A refreshing blend of sparkling wine and orange juice with a hint of tequila.",
  },
  {
    id: 36,
    image: drink3,
    title: "Fruit Punch Mocktail Recipe",
    price: "$5.99",
    category: "Drinks",
    description:
      "A vibrant and refreshing non-alcoholic beverage with a mix of tropical fruit juices.",
  },
  {
    id: 37,
    image: drink4,
    title: "Limoncello Spritz",
    price: "$8.49",
    category: "Drinks",
    description:
      "A light and bubbly cocktail featuring Limoncello, sparkling water, and a splash of soda.",
  },
  {
    id: 38,
    image: drink5,
    title: "Limonana (Middle Eastern Frozen Mint Lemonade Recipe)",
    price: "$6.99",
    category: "Drinks",
    description:
      "A refreshing frozen lemonade blended with fresh mint, perfect for hot days.",
  },
  {
    id: 39,
    image: drink6,
    title: "Frozen Mango Margarita",
    price: "$9.49",
    category: "Drinks",
    description:
      "A tropical frozen margarita made with fresh mango puree and a hint of lime.",
  },
  {
    id: 40,
    image: drink7,
    title: "The Bohemian",
    price: "$10.99",
    category: "Drinks",
    description:
      "A sophisticated cocktail with gin, elderflower liqueur, and a splash of tonic water.",
  },
  {
    id: 41,
    image: water,
    title: "YACHIRU",
    price: "$4.99",
    category: "Drinks",
    description:
      "A premium bottled water sourced from natural springs, known for its crisp and refreshing taste.",
  },
];

export default menuItems;
