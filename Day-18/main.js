"use strict";
// Day 18
// ### Question: 1 *Sum of Odd Numbers and Multiplication Table*
// Write a function that takes an array of numbers as input. The function should first find the sum of all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.
// *Function Signature:*
// typescript
// function oddSumMultiplicationTable(numbers: number[]): number[] {
//   // Your code here
// }
// *Example:*
// - Input: [2, 3, 5, 8, 11]
// - Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
//   - (Explanation: The odd numbers are 3, 5, and 11. Their sum is 19. The multiplication table of 19 is generated.)
// *Hint:*
// 1. Use a loop to iterate through the array and sum the odd numbers.
// 2. Use another loop to create the multiplication table for the sum.
function findOdd(arr) {
    let odds = [];
    for (let num of arr) {
        if (num % 2 !== 0) {
            odds.push(num);
        }
    }
    return odds;
}
function productOdds(number) {
    let oddNum = findOdd(number);
    let productOdd = 0;
    for (let i = 0; i < oddNum.length; i++) {
        productOdd += oddNum[i];
    }
    return productOdd;
}
function generatedTableOfOdds(number) {
    let sumOfOdds = productOdds(number);
    let tableArray = [];
    for (let i = 1; i <= 10; i++) {
        tableArray.push(`${sumOfOdds} x ${i} = ${i * sumOfOdds}`);
    }
    return tableArray;
}
// console.log(generatedTableOfOdds([2, 3, 5, 8, 11]))  //table of 19
// ### Question: 2 *Filter and Square Even Numbers*
// Write a function that takes an array of numbers as input. The function should filter out all the even numbers from the array, square each of those even numbers, and return a new array containing these squared values.
// *Function Signature:*
// typescript
// function squareEvenNumbers(numbers: number[]): number[] {
//   // Your code here
// }
// *Example:*
// - Input: [1, 2, 3, 4, 5, 6]
// - Output: [4, 16, 36]
//   - (Explanation: The even numbers are 2, 4, and 6. Their squares are 4, 16, and 36.)
// *Hint:*
// 1. Use a loop or array method to filter out the even numbers.
// 2. Square each of the filtered numbers and store the results in a new array.
function findEven(arr) {
    let even = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}
function generatedSquareOfEven(number) {
    let evenNum = findEven(number);
    let squareArray = [];
    for (let num of evenNum) {
        squareArray.push(num * num);
    }
    return squareArray;
}
console.log(generatedSquareOfEven([1, 2, 3, 4, 5]));
