class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }
  greet() {
    return `Hello ${this.firstName} ${this.lastName} of grade ${this.grade}`;
  }
}

let student1 = new Student("jk", "ong", "2")

console.log(student1.greet());