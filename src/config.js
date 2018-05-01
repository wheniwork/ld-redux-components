class LDRComponentConfig {
  constructor() {
    this._settings = Object.new();
  }

  get settings() {
    return this._settings;
  }

  init(options) {
    this._settings = {
      ...this._settings,
      reduxKey: options.reduxKey,
    };
  }
}

const ldrComponentConfig = new LDRComponentConfig();
export default ldrComponentConfig;
