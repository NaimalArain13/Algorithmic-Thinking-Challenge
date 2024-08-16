"use strict";
// Day 12
// ### Question 1: Remove Duplicates from Sorted Array
// *Problem:*
// You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
// *Example:*
// typescript
// Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: 5
// Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.
// *Note:*
// * Only return the length of the unique elements.
// * Duplicate elements should be ignored.
function removeDuplicatesInPlace(arr) {
    if (arr.length === 0)
        return 0;
    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
        if (arr[pointer2] !== arr[pointer1]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
    }
    return pointer1 + 1;
}
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const length1 = removeDuplicatesInPlace(arr);
console.log(length1); //5
console.log(arr.slice(0, length1)); //[ 1, 2, 3, 4, 5 ]
// ### Question 2: Move Zeroes
// *Problem:*
// You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
// *Example:*
// typescript
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// *Note:*
// * You must modify the array in-place.
// * The relative order of the non-zero elements should remain the same.
function moveZeroes(arrayWithZeros) {
    let nonZero = 0;
    for (let i = 0; i < arrayWithZeros.length; i++) {
        if (arrayWithZeros[i] !== 0) {
            [arrayWithZeros[nonZero], arrayWithZeros[i]] = [arrayWithZeros[i], arrayWithZeros[nonZero]];
            nonZero++;
        }
    }
}
const array = [0, 1, 0, 3, 12];
moveZeroes(array);
// console.log(array);
