import { MyCustompipePipe } from './my-custompipe.pipe';

describe('MyCustompipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustompipePipe();
    expect(pipe).toBeTruthy();
  });
});
