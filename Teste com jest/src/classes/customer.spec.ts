import { EntrepriseCostumer, IndividualCostumer } from './customer';

const createEntrePriseCostumerSut = (name: string, cnpj: string) => {
  return new EntrepriseCostumer(name, cnpj);
};

const createIndividualCostumerSut = (
  firstName: string,
  lastName: string,
  cpf: string,
) => {
  return new IndividualCostumer(firstName, lastName, cpf);
};

describe('EntrepriseCostumer', () => {
  it('should have property name and return getName()', () => {
    const sut = createEntrePriseCostumerSut('TesteName', '12.345.678/0001-01');
    expect(sut).toHaveProperty('name', 'TesteName');
    expect(sut.getName()).toBe('TesteName');
  });

  it('should have cnpj and return getIDN()', () => {
    const sut = createEntrePriseCostumerSut('TesteName', '12.345.678/0001-01');
    expect(sut).toHaveProperty('cnpj', '12.345.678/0001-01');
    expect(sut.getIDN()).toBe('12.345.678/0001-01');
  });
});

describe('IndividualCostumer', () => {
  it('should have property firstname, lastname and return getName()', () => {
    const sut = createIndividualCostumerSut(
      'FirstName',
      'LastName',
      '000.000.000-00',
    );
    expect(sut).toHaveProperty('firstName', 'FirstName');
    expect(sut).toHaveProperty('lastName', 'LastName');

    expect(sut.getName()).toBe('FirstName LastName');
  });

  it('should have property cpf and return getIDN()', () => {
    const sut = createIndividualCostumerSut(
      'FirstName',
      'LastName',
      '000.000.000-00',
    );
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});
