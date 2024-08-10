"use strict";
// Day-11
// Question 1: Merge Two Sorted Arrays
// Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by merging them. You cannot use any built-in sort function.
// typescript
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     // Your implementation here
// }
// // Example Usage:
// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];
// console.log(mergeSortedArrays(arr1, arr2));
// // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
//  Hint:
// - *Hint 1*: Start with two pointers, one at the beginning of each array.
// - *Hint 2*: Compare the elements at both pointers and add the smaller element to the result array.
// - *Hint 3*: Move the pointer of the array from which the element was taken.
// - *Hint 4*: Repeat until all elements from both arrays are merged.
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   let sortedArray: number[] = [];
//   let pointer1 = 0;
//   let pointer2 = 0;
//   while (pointer1 < arr1.length && pointer2 < arr2.length) {
//     if (arr1[pointer1] <= arr2[pointer2]) {
//       sortedArray.push(arr1[pointer1]);
//       pointer1++;
//     } else {
//       sortedArray.push(arr2[pointer2]);
//       pointer2++;
//     }
//   }
//   while (arr1[pointer1] < arr1.length) {
//     sortedArray.push(arr1[pointer1]);
//     pointer1++
//   }
//   while (arr2[pointer2] < arr2.length) {
//     sortedArray.push(arr2[pointer2]);
//     pointer2++
//   }
//   return sortedArray;
// }
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            result.push(arr1[pointer1]);
            pointer1++;
        }
        else {
            result.push(arr2[pointer2]);
            pointer2++;
        }
    }
    while (pointer1 < arr1.length) {
        result.push(arr1[pointer1]);
        pointer1++;
    }
    while (pointer2 < arr2.length) {
        result.push(arr2[pointer2]);
        pointer2++;
    }
    return result;
}
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 4];
// console.log(mergeSortedArrays(arr1,arr2));  //[ 1, 1, 2, 2, 3, 4 ]
// Question 2: Find the First Non-Repeated Character
// Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not repeat. If all characters repeat, return an empty string.
// typescript
// function firstNonRepeatedCharacter(s: string): string {
//     // Your implementation here
// }
// // Example Usage:
// const s = "swiss";
// console.log(firstNonRepeatedCharacter(s));
// // Expected output: "w"
// Hint:
// - *Hint 1*: Create an object to count the frequency of each character in the string.
// - *Hint 2*: Iterate through the string and update the count for each character.
// - *Hint 3*: Iterate through the string again and find the first character with a count of 1 in the object.
// - *Hint 4*: If no character with a count of 1 is found, return an empty string.
function firstNonRepeatedCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        let distinctValue = true;
        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                distinctValue = false;
                break;
            }
        }
        if (distinctValue) {
            return s[i];
        }
    }
    return "";
}
const s = "Naimal";
console.log(firstNonRepeatedCharacter(s));
// Expected output: "N"
