import { Feature, Variant, ldrComponentConfig } from '../src';

describe('ld-redux-component module', () => {
  it('will export Feature', () => {
    expect(Feature).toBeTruthy();
  });
  it('will export Variant', () => {
    expect(Variant).toBeTruthy();
  });
  it('will export ldrComponentConfig', () => {
    expect(ldrComponentConfig).toBeTruthy();
  });
});
