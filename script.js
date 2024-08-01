// complete this js code
// Person class
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class, which extends Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the Person class
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage:

// Creating an instance of Person
const person1 = new Person("Alice", 25);
person1.greet(); // Expected output: Hello, my name is Alice, I am 25 years old.

// Creating an instance of Employee
const employee1 = new Employee("Bob", 30, "Manager");
employee1.jobGreet(); // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
