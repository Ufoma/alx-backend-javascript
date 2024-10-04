// 6-sky_high.js

import Building from "./5-building.js";

/**
 * Represents a high-rise building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new high-rise building.
   * @param {number} sqft - Square footage.
   * @param {number} floors - Number of floors.
   */
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number' || floors <= 0) {
      throw new TypeError('Number of floors must be a positive number');
    }
    this._floors = floors;
  }

  /**
   * Gets the number of floors.
   * @returns {number} Number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Evacuation warning message.
   * @returns {string} Evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
