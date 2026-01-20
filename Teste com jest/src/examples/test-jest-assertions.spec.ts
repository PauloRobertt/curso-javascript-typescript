describe('Primitiver values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    //Valores primitivos

    expect(number).toBe(10);
    //Para objetos / arrays
    expect(number).toEqual(10);
    //Não seja null
    expect(number).not.toBe(null);
    //Verdadeiro
    expect(true).toBeTruthy();
    //Falso
    expect(false).toBeFalsy();
    //Maior Que
    expect(number).toBeGreaterThan(5);
    //Menor Que
    expect(number).toBeLessThan(11);
    //Menor ou Igual
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10);
  });
});

describe('Objects', () => {
  it('Should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastname');
    expect(person).toHaveProperty('age', 30);

    expect(person.name).toBe('Luiz2');
  });
});
