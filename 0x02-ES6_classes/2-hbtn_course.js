/**
 * Represents a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new Holberton course.
   * @param {string} name - Course name.
   * @param {number} length - Course length.
   * @param {string[]} students - Array of student names.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the course name.
   * @returns {string} Course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the course name.
   * @param {string} name - New course name.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Gets the course length.
   * @returns {number} Course length.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the course length.
   * @param {number} length - New course length.
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Gets the array of student names.
   * @returns {string[]} Array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the array of student names.
   * @param {string[]} students - New array of student names.
   */
  set students(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
