import { Discount } from './discount';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const createSutMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

//Discount Mock
const createDiscountMock = () => {
  const discountMock = createSutMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

//CartItemMock
const createCartItemMock = (name: string, price: number) => {
  class CartItemMock implements Product {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CartItemMock(name, price);
};

describe('Shopping-Cart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createDiscountMock();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should add item in cart', () => {
    const { sut } = createDiscountMock();
    sut.AddItem(createCartItemMock('NomeProduto', 100));
    sut.AddItem(createCartItemMock('NomeProduto2', 200));

    expect(sut.items.length).toBe(2);
  });

  it('should remove item in cart', () => {
    const { sut } = createDiscountMock();

    sut.AddItem(createCartItemMock('NomeProduto', 100));

    sut.RemoveItem(0);

    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should calcule totvalue', () => {
    const { sut } = createDiscountMock();

    sut.AddItem(createCartItemMock('NomeProduto1', 100));
    sut.AddItem(createCartItemMock('NomeProduto2', 200));
    sut.AddItem(createCartItemMock('NomeProduto3', 300));

    expect(sut.totValue()).toBe(600);
  });

  it('should calcule totvalue with discount', () => {
    const { sut } = createDiscountMock();

    sut.AddItem(createCartItemMock('NomeProduto1', 100));
    sut.AddItem(createCartItemMock('NomeProduto2', 200));
    sut.AddItem(createCartItemMock('NomeProduto3', 300));

    expect(sut.totValueWithDiscount()).toBe(600);
  });

  it('should clear items in cart', () => {
    const { sut } = createDiscountMock();

    sut.AddItem(createCartItemMock('NomeProduto1', 100));
    sut.AddItem(createCartItemMock('NomeProduto2', 200));
    sut.AddItem(createCartItemMock('NomeProduto3', 300));

    sut.clearCart();

    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should call discount.calculate(price) once when totalwithDiscount is called', () => {
    const { discountMock, sut } = createDiscountMock();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totValueWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });
});
