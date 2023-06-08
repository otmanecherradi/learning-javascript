import { nanoid } from 'nanoid';

export class Student {
  /**
   *
   * @param {string} code
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} mark
   */
  constructor(firstName, lastName, mark) {
    this._validateParams(firstName, lastName, mark);

    this.code = nanoid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.mark = mark;
  }

  /**
   * @private
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} mark
   */
  _validateParams(firstName, lastName, mark) {
    if (mark < 0 || mark > 20) throw new Error('Mark should be between 0 and 20');
  }
}
