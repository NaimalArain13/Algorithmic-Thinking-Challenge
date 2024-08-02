"use strict";
// Day 5
// *Question 1: Array Comparison and Manipulation (Updated)*
// Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
// 1. *If the lengths of both arrays are the same and all elements are the same:*
//    - Merge both arrays into one array.
//    - Multiply all elements of the merged array to produce a single number.
//    - Return the product.
// 2. *If the lengths of both arrays are different:*
//    - Merge both arrays into one array.
//    - Return the middle element of the merged array.
// 3. *If the lengths of both arrays are the same but elements are different:*
//    - Make the elements of both arrays the same by adding corresponding elements.
//    - Merge the arrays.
//    - Return the sum of the elements of the resulting merged array.
// *Hints:*
// - Use loops to compare elements and calculate new values.
// - Avoid using built-in array methods.
// - Think about how to find the middle element of an array when lengths are different.
// *Example:*
// typescript
// function manipulateArrays(arr1: number[], arr2: number[]): number {
//     // Your implementation here
// }
// // Example Test Cases
// // manipulateArrays([1, 2, 3], [1, 2, 3]) should output 216 (product of [1, 2, 3, 1, 2, 3])
// // manipulateArrays([1, 2], [3, 4, 5]) should output 3 (middle element of [1, 2, 3, 4, 5])
// // manipulateArrays([1, 2], [3, 4]) should output 6 (sum of [1, 2, 1, 2])
// ---
function manipulateArrays(arr1, arr2) {
    let merged_sum = [];
    let merged_multiplied = [];
    let merged_middle = [];
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            let multiplied = 1;
            if (arr1[i] === arr2[i]) {
                merged_multiplied = [...arr1, ...arr2];
                for (let j = 0; j < merged_multiplied.length; j++) {
                    multiplied *= merged_multiplied[j];
                }
                return multiplied;
            }
            else if (arr1.length === arr2.length) {
                let sum = 0;
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) {
                        arr2 = arr1;
                    }
                    merged_sum = [...arr1, ...arr2];
                }
                for (let j = 0; j < merged_sum.length; j++) {
                    sum += merged_sum[j];
                }
                return sum;
            }
        }
    }
    else if (arr1 !== arr2) {
        merged_middle = [...arr1, ...arr2];
        let length_merged = Math.floor(merged_middle.length / 2);
        return merged_middle[length_merged];
    }
}
console.log(manipulateArrays([1, 2, 3], [1, 2, 3]));
console.log(manipulateArrays([1, 2, 3, 4], [3, 4, 5]));
console.log(manipulateArrays([1, 2], [3, 4]));
// *Question 2: Extract First Letters from String Array*
// Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.
// *Hints:*
// - Iterate through each name in the array.
// - Extract the first letter of each name without using built-in methods.
// *Example:*
// typescript
// function extractFirstLetters(names: string[]): string[] {
//     // Your implementation here
// }
// // Example Test Case
// // extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
function extractFirstLetters(names) {
    let firstLetter = [];
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < names[i].length; j++) {
            if (j == 0) {
                firstLetter.push(names[i][j]);
            }
        }
    }
    return firstLetter;
}
// console.log(extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]));
