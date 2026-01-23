import { Order } from './order';
import { ShoppingCartProtocol } from './interface/shopping-cart-protocol';
import { MessageProtocol } from './interface/message-protocol';
import { CartItem } from './interface/cart-item';

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messageMock = new MessageMock();
  const sut = new Order(shoppingCartMock, messageMock);

  return { sut, shoppingCartMock, messageMock };
};

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): CartItem[] {
    return [];
  }

  AddItem(product: CartItem): void {}

  RemoveItem(indexItem: number): void {}

  totValue(): number {
    return 1;
  }

  totValueWithDiscount(discount: number): number {
    return 2;
  }

  isEmpty(): boolean {
    return false;
  }

  clearCart(): void {}
}

class MessageMock implements MessageProtocol {
  sendMessage(msg: string): void {}
}

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(true);
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);

    expect(sut.orderStatus).toBe('Open');
  });

  it('should send message in checkout', () => {
    const { sut, messageMock } = createSut();
    const messageSpy = jest.spyOn(messageMock, 'sendMessage');
    sut.checkout();
    expect(messageSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear items in cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartSpy = jest.spyOn(shoppingCartMock, 'clearCart');
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
  });

  it('should return statusOrder: Open or Closed', () => {
    const { sut } = createSut();
    expect(sut.orderStatus).toBe('Open');
    sut.checkout();
    expect(sut.orderStatus).toBe('Closed');
  });
});
