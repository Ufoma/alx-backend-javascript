// 100-evcar.js

import Car from './10-car.js';

/**
 * Represents an Electric Vehicle Car.
 */
export default class EVCar extends Car {
  /**
   * Creates a new Electric Vehicle Car.
   * @param {string} brand - Car brand.
   * @param {string} motor - Car motor.
   * @param {string} color - Car color.
   * @param {string} range - Car range.
   */
  constructor(brand, motor, color, range) {
    super(); // Call Car constructor
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  /**
   * Clones the car, returning a new instance of Car.
   * @returns {Car} Cloned Car instance.
   */
  cloneCar() {
    return new Car(); // Return a new Car instance
  }
}
