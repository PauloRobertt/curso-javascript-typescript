import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Message } from './services/message';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const cart = new ShoppingCart(fiftyPercentDiscount);
const msg = new Message();
const order = new Order(cart, msg);
cart.AddItem(new Product('NomeItem1', 100));
cart.AddItem(new Product('NomeItem2', 200));
console.log(cart.items);
order.checkout();
