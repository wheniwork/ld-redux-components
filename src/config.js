export class LDRComponentConfig {
  constructor() {
    this._settings = Object.create(null);
  }

  get settings() {
    return this._settings;
  }

  init(options) {
    this._settings = {
      ...this._settings,
      reduxKey: options.reduxKey,
      store: options.store,
    };
  }
}

const ldrComponentConfig = new LDRComponentConfig();
export default ldrComponentConfig;
