// export function cashier() {
//   return {};
// }
interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  length: number;
  total: number;
  addItem(item: CartItem): CartAPI;
  add(name: string, price: number, qty: number): CartAPI;
}

// export class Cashier {
export function cashier(): CartAPI {
  let cart: CartItem[] = [];
  return {
    add(name: string, price: number, qty: number = 1): CartAPI {
      cart.push({ name, price, qty });
      return this;
    },
    addItem(item: CartItem): CartAPI {
      cart.push(item);
      return this;
    },
    get length(): number {
      return cart.reduce((quantity, { qty }) => quantity + qty, 0);
    },
    get total(): number {
      return cart.reduce((totalPrice, { price, qty }) => totalPrice + price * qty, 0);
    }
  };
}
console.log(
  cashier().add('name',  12, 1).add('name',  12, 5).total
)