import { describe, expect, test } from '@jest/globals';

import { Student } from '../src/student';
import { Group } from '../src/group';

const MIN_MARK = 0;
const MAX_MARK = 20;
function randomMark() {
  return Math.floor(Math.random() * (MAX_MARK - MIN_MARK + 1)) + MIN_MARK;
}

describe('001-jun-8th tests', () => {
  /**
   * @type {Student}
   */
  let student;
  /**
   * @type {Group}
   */
  let group;
  test('Should create a new student', () => {
    student = new Student('First name', 'Last name', 10);

    expect(student.code).toBeDefined();
  });

  test('Should create a new group', () => {
    group = new Group('Group 1');

    expect(group.name).toBeDefined();
  });

  test('Should add a student to the group that is not there yet', () => {
    group.add(student);

    expect(group.students.length).toEqual(1);

    expect(() => {
      group.add(student);
    }).toThrow(/already in this group/);
  });

  test('Should multiple students to the group', () => {
    for (let idx = 0; idx < 20; idx += 1) {
      group.add(new Student('First name', 'Last name', randomMark()));
      expect(group.count()).toEqual(1 + 1 + idx);
    }

    expect(group.count()).toEqual(21);
  });

  test('Should get the first student', () => {
    const idx = group.searchUsingForEach(student.code);
    expect(idx).toEqual(0);

    const std = group.searchUsingFind(student.code);
    expect(std.code).toEqual(student.code);
  });

  test('Should get a student that is not there', () => {
    const idx = group.searchUsingForEach('a');
    expect(idx).toEqual(-1);

    const std = group.searchUsingFind('a');
    expect(std).toBeUndefined();
  });

  test('Should remove the last student', () => {
    group.removeLastStudent();
    expect(group.count()).toEqual(20);
  });

  test('Should update student mark', () => {
    group.updateStudentMark(student.code, 20);
    expect(group.searchUsingFind(student.code).mark).toEqual(20);
  });

  test('Should sort the group', () => {
    const sortedStudents = group.sortUsingBubbleSort();
    expect(sortedStudents).toMatchObject(group.sortUsingArraySort());
  });

  test('Should get group average', () => {
    expect(group.getAverage()).toEqual(
      group.students.reduce((a, s) => (a += s.mark), 0) / group.count()
    );
  });
});
