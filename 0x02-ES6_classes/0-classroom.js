// classroom.js

/**
 * Represents a classroom.
 */
export default class ClassRoom {
  /**
   * Creates a new classroom.
   * @param {number} maxStudentsSize - Maximum number of students.
   */
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number' || maxStudentsSize <= 0) {
      throw new Error('maxStudentsSize must be a positive number');
    }
    this._maxStudentsSize = maxStudentsSize;
  }

  /**
   * Gets the maximum number of students.
   * @returns {number} maxStudentsSize.
   */
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  /**
   * Sets the maximum number of students.
   * @param {number} maxStudentsSize - New maximum number of students.
   */
  set maxStudentsSize(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number' || maxStudentsSize <= 0) {
      throw new Error('maxStudentsSize must be a positive number');
    }
    this._maxStudentsSize = maxStudentsSize;
  }
}
