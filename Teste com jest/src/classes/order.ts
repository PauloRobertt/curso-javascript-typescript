import { StatusCart } from './interface/status-cart';
import { ShoppingCartProtocol } from './interface/shopping-cart-protocol';
import { MessageProtocol } from './interface/message-protocol';

export class Order {
  private _orderStatus: StatusCart = 'Open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly msg: MessageProtocol,
  ) {}

  checkout() {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.msg.sendMessage('Seu pedido foi recebido');
    this.cart.clearCart();
  }

  get orderStatus(): StatusCart {
    return this._orderStatus;
  }
}
