"use strict";
// Question 19: Implement a Basic Counter
// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:
// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.
// Example Usage:
// const counter = new Counter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // Output: 2
// counter.decrement();
// console.log(counter.getValue()); // Output: 1
class Counter {
    constructor() {
        this.counter = 0;
    }
    increment() {
        this.counter = this.counter + 1;
    }
    decrement() {
        this.counter = this.counter - 1;
    }
    getValue() {
        return this.counter;
    }
}
let basicCounter = new Counter();
// basicCounter.increment() //counter = 1
// basicCounter.increment() //counter = 2
// basicCounter.increment() //counter = 3
// console.log(basicCounter) //Counter { counter: 3 }
// basicCounter.decrement()  //counter = 2
// console.log(basicCounter.getValue());  //2
// Question 20: Implement a Simple Student Record
// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:
// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
// Example Usage:
// const student = new Student();
// student.setName("Alice");
// student.setGrade(90);
// console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
class StudentRecord {
    constructor() {
        this.name = "";
        this.grade = 0;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    setName(name) {
        this.name = name;
    }
    getRecord() {
        return { name: this.name, grade: this.grade };
    }
}
const student = new StudentRecord();
student.setName("Naimal");
student.setGrade(95);
console.log(student.getRecord());
