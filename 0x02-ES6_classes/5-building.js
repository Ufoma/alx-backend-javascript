// 5-building.js

/**
 * Abstract class representing a building.
 */
export default class Building {
  /**
   * Creates a new building.
   * @param {number} sqft - Square footage.
   */
  constructor(sqft) {
    if (typeof sqft !== 'number' || sqft <= 0) {
      throw new TypeError('Square footage must be a positive number');
    }
    this._sqft = sqft;
  }

  /**
   * Gets the square footage.
   * @returns {number} Square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Evacuation warning message (must be overridden by subclasses).
   * @throws {Error} If not implemented by subclass.
   */
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
