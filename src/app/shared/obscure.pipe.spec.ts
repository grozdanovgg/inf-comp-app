import { ObscurePipe } from './obscure.pipe';

describe('ObscurePipe', () => {
  let pipe;
  it('create an instance', () => {
    pipe = new ObscurePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform should obscure the string', () => {
    const word = 'hello';
    const expected = '*****';

    expect(pipe.transform(word)).toBe(expected);
    expect(pipe.transform(word.length)).toBe(expected.length);
  });

  it('transform should obscure long string', () => {
    const word = 'hello world!!!';
    const expected = ('**************');

    expect(pipe.transform(word)).toBe(expected);
    expect(pipe.transform(word.length)).toBe(expected.length);
  });

  it('transform should not obscure the word if obscure parameter is false', () => {
    const word = 'hello';

    expect(pipe.transform(word, false)).toBe(word);
  });
});
