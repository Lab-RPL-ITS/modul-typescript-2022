// Konsep Class di Typescript
// - Class

// class Employee {
//   // properties
//   employeeCode: number;
//   employeeName: string;

//   // constructor
//   constructor(code: number, name: string) {
//     this.employeeCode = code;
//     this.employeeName = name;
//   }

//   // methods
//   getEmployeeId(): string {
//     return this.employeeCode + "-" + this.employeeName;
//   }
// }

// let firstEmployee = new Employee(1, "Wisnu");
// console.log(firstEmployee);
// console.log(firstEmployee.getEmployeeId());

// - Access Modifiers
//   - Private

// class Employee {
//   // properties
//   empCode: number;
//   empName: string;

//   // constructor
//   constructor(code: number, name: string) {
//     this.empName = name;
//     this.empCode = code;
//   }

//   // methods
//   private getEmployeeId(): string {
//     return `${this.empCode}-${this.empName}`;
//   }

//   showEmployeeId(): string {
//     return this.getEmployeeId();
//   }
// }

// let firstEmployee = new Employee(12, "Rizqi");

// // console.log(firstEmployee.getEmployeeId()); // compile time error
// console.log(firstEmployee.showEmployeeId());

//   - Public

// class Employee {
//   // properties
//   empCode: number;
//   empName: string;

//   // constructor
//   constructor(code: number, name: string) {
//     this.empName = name;
//     this.empCode = code;
//   }

//   // methods
//   public getEmployeeId(): string {
//     return `${this.empCode}-${this.empName}`;
//   }

//   showEmployeeId(): string {
//     return this.getEmployeeId();
//   }
// }

// let firstEmployee = new Employee(12, "Rizqi");

// console.log(firstEmployee.getEmployeeId());
// console.log(firstEmployee.showEmployeeId());

//   - Protected

//   - Readonly Properties

// class Employee {
//   // properties
//   readonly empCode: number = 20;
// }

// let firstEmployee = new Employee();

// console.log(firstEmployee.empCode);
// firstEmployee.empCode = 12

// class Employee {
//   // properties
//   readonly empCode: number;

//   // constructor
//   constructor(
//     code: number,
//     readonly name: string) {
//     this.empCode = code;
//     this.name = name;
//   }
// }

// let firstEmployee = new Employee(12, "Rizqi");

// console.log(firstEmployee.empCode + " - " + firstEmployee.name);

// firstEmployee.empCode = 12; // compile time error
// firstEmployee.name = "Rizqi"; // compile time error

// const employee = "Wisnu"
// employee = "Rizqi"

// - Inheritance

// class Person {
//   constructor(private firstName: string, protected lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   describe(): string {
//     return `This is ${this.firstName} ${this.lastName}.`;
//   }
// }

// class Employee extends Person {
//   // semua protected dan public dapat diakses class Employee

//   getName(): string {
//     return this.lastName;
//   }
// }

// let firstEmployee = new Employee("Fairuz", "Hasna");

// // console.log(firstEmployee.firstName); // compile time error
// // console.log(firstEmployee.lastName); // compile time error
// console.log(firstEmployee.getFullName()); // output "Fairuz Hasna"
// console.log(firstEmployee.describe()); // output "This is Fairuz Hasna."

//   - Constructor

// class Person {
//   constructor(private firstName: string, protected lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   describe(): string {
//     return `This is ${this.firstName} ${this.lastName}.`;
//   }
// }

// class Employee extends Person {
//   constructor(firstName: string, lastName: string, private jobTitle: string) {
//     // gunakan super() dengan parameter sama dengan constructor parent class
//     super(firstName, lastName);

//     // kode lanjutan constructor
//     console.log(this.jobTitle);
//     console.log(this.getFullName());
    
//   }
// }

// let firstEmployee = new Employee("Fairuz", "Hasna", "Programmer");

//   - Method Overriding

// class Person {
//   constructor(private firstName: string, protected lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   describe(): string {
//     return `This is ${this.firstName} ${this.lastName}.`;
//   }
// }

// class Employee extends Person {
//   constructor(firstName: string, lastName: string, private jobTitle: string) {
//     // gunakan super() dengan parameter sama dengan constructor parent class
//     super(firstName, lastName);
//   }

//   describe(): string {
//     return `${super.describe()} I'm a ${this.jobTitle}.`;
//   }
// }

// let firstEmployee = new Employee("Fairuz", "Hasna", "Programmer");
// console.log(firstEmployee.describe()); // output "This is Fairuz Hasna. I'm a Programmer."

// - Static

class TypescriptMath {
  static readonly PI = 3.14;
}

console.log(TypescriptMath.PI);
TypescriptMath.PI = 4
console.log(TypescriptMath.PI);

// class Employee {
//   // static property
//   static headcount: number = 0;

//   constructor(private firstName: string, private lastName: string) {
//     Employee.headcount++;
//   }

//   // static method
//   static getHeadcount() {
//     return Employee.headcount;
//   }
// }

// console.log("Jumlah Employee Awal: " + Employee.headcount); // output "0"

// let firstEmployee = new Employee("Lathifa", "Itqonina");
// console.log("Jumlah Employee Sekarang: " + Employee.headcount); // output "1"

// let secondEmployee = new Employee("Fairuz", "Hasna");
// console.log("Jumlah Employee Akhir: " + Employee.headcount); // output "2"

// console.log(Employee.getHeadcount()); // output "2"

// Math.PI

// Math.abs()