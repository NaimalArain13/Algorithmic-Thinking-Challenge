"use strict";
// 30 Day DSA Challenge from Hello Coders Team
// *Day 6:*
// Question 11: Simple Calculator
// *Task:*
// Create a simple calculator that can perform addition, subtraction, multiplication, and division.
// 1. *Functional Programming Approach:*
//    - Write functions for each operation: add, subtract, multiply, and divide.
//    - Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.
function add(num1, num2, operator) {
    if (operator === "+" || operator === "add" || operator === "addition")
        return num1 + num2;
}
function sub(num1, num2, operator) {
    if (operator === "-" || operator === "sub" || operator === "subtraction")
        return num1 - num2;
}
function multiply(num1, num2, operator) {
    if (operator === "*" ||
        operator === "multiply" ||
        operator === "multiplication")
        return num1 * num2;
}
function division(num1, num2, operator) {
    if (operator === "/" || operator === "divide" || operator === "division")
        return num1 / num2;
}
// console.log(add(2, 4, "+")); //6
// console.log(sub(2, 4, "-")); //-2
// console.log(multiply(2, 4, "multiplication")); //8
// console.log(division(2, 4, "divide")); //0.5
// 2. *Object-Oriented Programming (OOP) Approach:*
//    - Create a Calculator class with methods for each operation.
//    - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.
class Calculator {
    constructor(num1, num2, operator) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
        if (operator === "+" || operator === "add" || operator === "addition") {
            console.log(this.num1 + this.num2);
        }
        else if (operator === "-" ||
            operator === "sub" ||
            operator === "subtraction") {
            console.log(this.num1 - this.num2);
        }
        else if (operator === "*" ||
            operator === "multiply" ||
            operator === "multiplication") {
            console.log(this.num1 * this.num2);
        }
        else if (operator === "/" ||
            operator === "divide" ||
            operator === "division") {
            console.log(this.num1 / this.num2);
        }
    }
}
// let calculator = new Calculator(2,4,"multiply")
// calculator
// Question 12: Separate Elements by Type
// *Task:*
// Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).
function seperateType(array) {
    let stringArray = [];
    let numberArray = [];
    let booleanArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            stringArray.push(array[i]);
        }
        else if (typeof array[i] === "number") {
            numberArray.push(array[i]);
        }
        else {
            booleanArray.push(array[i]);
        }
    }
    return [stringArray, numberArray, booleanArray];
}
let mixedArray = ["apple", 23, true, "banana", 24, false];
console.log(seperateType(mixedArray));
