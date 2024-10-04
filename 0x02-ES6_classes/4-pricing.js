// 4-pricing.js

import Currency from "./3-currency.js";

/**
 * Represents a pricing information.
 */
export default class Pricing {
  /**
   * Creates a new pricing information.
   * @param {number} amount - Price amount.
   * @param {Currency} currency - Currency information.
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the price amount.
   * @returns {number} Price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the price amount.
   * @param {number} amount - New price amount.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * Gets the currency information.
   * @returns {Currency} Currency information.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency information.
   * @param {Currency} currency - New currency information.
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }
