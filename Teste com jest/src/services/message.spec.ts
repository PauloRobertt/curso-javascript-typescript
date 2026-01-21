import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Message', () => {
  it('Should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('Teste2')).toBeUndefined();
  });

  it('Testando message', () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Testando message', () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledWith('Teste');
  });
});
