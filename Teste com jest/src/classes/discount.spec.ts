import { Discount, NoDiscount, FiftyPercentDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('NoDiscount', () => {
  it('no should apply discount', () => {
    const sut = createSut(NoDiscount);
    const priceTest = 100;
    expect(sut.calculate(priceTest)).toBe(priceTest);
  });
});

describe('FiftyPercentDiscount', () => {
  it('should apply 50% Discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    const priceTest = 100;
    const discountTest = 50;
    expect(sut.calculate(priceTest)).toBe((discountTest / 100) * priceTest);
  });
});
