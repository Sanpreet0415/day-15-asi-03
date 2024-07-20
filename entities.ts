// entities.ts

// Define the Person class
export class Person {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to display basic information
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Define the Student class extending Person
export class Student extends Person {
    // Additional properties
    studentId: number;
    course: string;
    semester: number;

    // Constructor
    constructor(name: string, age: number, studentId: number, course: string, semester: number) {
        // Invoke superclass constructor
        super(name, age);

        // Initialize subclass specific properties
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }

    // Override displayInfo method to include student details
    displayInfo(): void {
        super.displayInfo(); // Call superclass method
        console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
}

// Define the Staff class extending Person
export class Staff extends Person {
    // Additional properties
    staffId: number;
    department: string;
    position: string;

    // Constructor
    constructor(name: string, age: number, staffId: number, department: string, position: string) {
        // Invoke superclass constructor
        super(name, age);

        // Initialize subclass specific properties
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }

    // Override displayInfo method to include staff details
    displayInfo(): void {
        super.displayInfo(); // Call superclass method
        console.log(`Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`);
    }
}
