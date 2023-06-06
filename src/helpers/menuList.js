import NeapolitanPizza from "../assets/pizza-1.webp";
import ChicagoPizza from "../assets/pizza-2.webp";
import NewYorkStylePizza from "../assets/pizza-3.webp";
import SicilianPizza from "../assets/pizza-4.webp";
import GreekPizza from "../assets/pizza-5.webp";
import StLouisPizza from "../assets/pizza-6.webp";
import CaliforniaPizza from "../assets/pizza-7.webp";
import DetroitPizza from "../assets/pizza-8.webp";

const menuList = [
  { id: 1, name: "Neapolitan Pizza", info: "affordable and readily available through numerous street vendors.", review: 92, price: 21.9, image: NeapolitanPizza },
  { id: 2, name: "Chicago Pizza", info: "with slices of mozzarella lining the dough followed by meat, vegetables", review: 142, price: 18.9, image: ChicagoPizza },
  { id: 3, name: "New York-Style Pizza", info: "toppings for Chicago pizza are ground beef, sausage, pepperoni, onion, mushrooms, and green peppers", review: 67, price: 16.9, image: NewYorkStylePizza },
  { id: 4, name: "Sicilian Pizza", info: "Adding oil to the pan also helps to make the base of the dough a bit crispier", review: 188, price: 16.9, image: SicilianPizza },
  { id: 5, name: "Greek Pizza", info: "unique flavor has to do with the minerals present in New York’s tap water supply.", review: 244, price: 19.9, image: GreekPizza },
  { id: 6, name: "California Pizza", info: "California Pizza pizza usually features tomato sauce and mozzarella cheese. ", review: 542, price: 14.9, image: CaliforniaPizza },
  { id: 7, name: "Detroit Pizza", info: "This square-cut pizza is served with or without cheese", review: 230, price: 12.9, image: DetroitPizza },
  { id: 8, name: "St. Louis Pizza", info: "The sauce typically has a tangy tomato paste with a strong oregano flavor", review: 76, price: 19.9, image: StLouisPizza },
];
export default menuList;
