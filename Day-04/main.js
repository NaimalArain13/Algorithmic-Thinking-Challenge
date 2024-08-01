"use strict";
// *30 Day DSA Challenge from Hello Coders Team*
// Day:4 Task
// Question 7: Find Duplicate Numbers in an Array
// *Description:*
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.
// *Function Signature:*
// typescript
// function findDuplicates(numbers: number[]): number[] {
//     // Your code here
// }
// *Example:*
// typescript
// // Input
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
// // Output
// const duplicates = findDuplicates(numbers);
// console.log(duplicates); // [2, 5]
// *Hints:*
// 1. Create an empty array to store the result.
// 2. Use a nested loop to compare each element with every other element.
// 3. If a duplicate is found, add it to the result array if it is not already included.
// ---
function findDuplicates(numbers) {
    let duplicates = [];
    let seenElements = [];
    for (let i = 0; i < numbers.length; i++) {
        let isDuplicate = false;
        let isSeen = false;
        for (let j = 0; j < seenElements.length; j++) {
            if (seenElements[j] === numbers[i]) {
                isSeen = true;
                break;
            }
        }
        if (isSeen) {
            for (let k = 0; k < duplicates.length; k++) {
                if (duplicates[k] == numbers[i]) {
                    isDuplicate = true;
                    break;
                }
            }
        }
        if (isSeen && !isDuplicate) {
            duplicates.push(numbers[i]);
        }
        if (!isSeen) {
            seenElements.push(numbers[i]);
        }
    }
    return duplicates;
}
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const duplicates = findDuplicates(numbers);
function printTopStudents(students) {
    // let stdMarks:Student[] = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > 80) {
            console.log(`Student ${students[i].name} has ${students[i].marks}`);
        }
    }
}
const students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 }
];
// // Output
printTopStudents(students);
// // Should print:
// // Sara - Age: 22, Marks: 85
// // John - Age: 21, Marks: 90
