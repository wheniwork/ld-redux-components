import config, { LDRComponentConfig } from '../src/config';

beforeEach(() => {
  jest.resetModules();
});

describe('Config', () => {
  it('will be a singleton', () => {
    expect(config instanceof LDRComponentConfig).toBe(true);
  });

  it('will set the redexKey in the init method', () => {
    config.init({ reduxKey: 'LD' });
    expect(config.settings.reduxKey).toBe('LD');
  });
});
