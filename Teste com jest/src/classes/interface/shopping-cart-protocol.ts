import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  get items(): readonly CartItem[];
  AddItem(product: CartItem): void;
  RemoveItem(indexItem: number): void;
  totValue(): number;
  totValueWithDiscount(discount: number): number;
  isEmpty(): boolean;
  clearCart(): void;
}
