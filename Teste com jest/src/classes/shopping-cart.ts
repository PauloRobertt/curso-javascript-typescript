import { Discount } from './discount';
import { CartItem } from './interface/cart-item';
import { ShoppingCartProtocol } from './interface/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  AddItem(product: CartItem): void {
    this._items.push(product);
  }

  RemoveItem(indexItem: number): void {
    const itemRemovido = this._items.splice(indexItem, 1);
    console.log('Item removido com sucesso', itemRemovido);
  }

  totValue(): number {
    const totvalue = this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
    return +totvalue;
  }

  totValueWithDiscount(): number {
    return this.discount.calculate(this.totValue());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clearCart(): void {
    this._items.length = 0;
  }

  get items(): readonly CartItem[] {
    return this._items;
  }
}
