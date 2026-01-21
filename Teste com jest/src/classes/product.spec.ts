import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Message', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return one product', () => {
    const sut = createSut('NomeProduto', 100);
    expect(sut).toHaveProperty('name', 'NomeProduto');
    expect(sut).toHaveProperty('price', 100);
  });
});
