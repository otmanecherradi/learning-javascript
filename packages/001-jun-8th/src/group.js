export class Group {
  /**
   *
   * @param {string} name
   * @param {import('./student').Student[]} students
   */
  constructor(name, students = []) {
    this.name = name;
    this.students = students;
  }

  /**
   * @public
   * @param {import('./student').Student} student
   */
  add(student) {
    if (!this.searchUsingFind(student.code)) this.students.push(student);
    else throw new Error(`Student (${student.code}) already in this group`);
  }

  /**
   * @public
   */
  show() {
    console.log(`Group: ${this.name}`);
    console.log('List of students:');

    this.students.forEach((s) => {
      console.log(`Student (${s.code}): ${s.lastName} ${s.firstName}, ${s.mark}/20`);
    });
  }

  /**
   * @public
   */
  count() {
    return this.students.length;
  }

  /**
   * @public
   * @param {string} studentCode
   */
  searchUsingForEach(studentCode) {
    let idx = -1;

    this.students.forEach((s, jdx) => {
      if (s.code === studentCode) idx = jdx;
    });

    return idx;
  }

  /**
   * @public
   * @param {string} studentCode
   */
  searchUsingFind(studentCode) {
    return this.students.find((s) => s.code === studentCode);
  }

  /**
   * @public
   */
  removeLastStudent() {
    this.students.pop();
  }

  /**
   * @public
   * @param {string} studentCode
   */
  removeStudent(studentCode) {
    this.students = this.students.filter((s) => s.code !== studentCode);
  }

  /**
   * @public
   * @param {string} studentCode
   * @param {number} studentMark
   */
  updateStudentMark(studentCode, studentMark) {
    const studentIdx = this.searchUsingForEach(studentCode);
    if (studentIdx === -1) throw new Error('Student not found');

    this.students[studentIdx].mark = studentMark;
  }

  /**
   * @public
   */
  sortUsingBubbleSort() {
    const students = this.students;
    for (let idx = 0; idx < students.length; idx += 1) {
      for (let jdx = 0; jdx < students.length - idx - 1; jdx++) {
        if (students[jdx].mark > students[jdx + 1].mark) {
          const temp = students[jdx];
          students[jdx] = students[jdx + 1];
          students[jdx + 1] = temp;
        }
      }
    }

    return students;
  }

  /**
   * @public
   */
  sortUsingArraySort() {
    return this.students.sort((s1, s2) => s1.mark - s2.mark);
  }

  /**
   * @public
   */
  getAverage() {
    return this.students.reduce((a, s) => (a += s.mark), 0) / this.count();
  }
}
