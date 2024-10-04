// currency.js

/**
 * Represents a currency.
 */
export default class Currency {
  /**
   * Creates a new currency.
   * @param {string} code - Currency code.
   * @param {string} name - Currency name.
   */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   * @returns {string} Currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {string} code - New currency code.
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  /**
   * Gets the currency name.
   * @returns {string} Currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {string} name - New currency name.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Displays the full currency information.
   * @returns {string} Full currency information in the format "name (code)".
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
