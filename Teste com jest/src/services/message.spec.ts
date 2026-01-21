import { Message } from './message';

describe('Message', () => {
  it('Should return undefined', () => {
    const sut = new Message();
    expect(sut.sendMessage('Teste2')).toBeUndefined();
  });

  it('Testando message', () => {
    // System under test
    const sut = new Message();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Testando message', () => {
    // System under test
    const sut = new Message();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledWith('Teste');
  });
});
