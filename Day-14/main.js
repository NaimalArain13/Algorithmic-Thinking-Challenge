"use strict";
// DAY 14
//  *Find the Maximum Sum from Two Arrays*
// *Problem Statement:*  
// Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum number from each array and return the sum of these two maximum numbers.
// *Example:*  
// typescript
// findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5]); // Output: 38 (8 from the first array + 30 from the second array)
// findMaxSum([1, 2, 3], [4, 5, 6]); // Output: 9 (3 from the first array + 6 from the second array)
// *Hints:*  
// 1. *Step 1: Write a Helper Function to Find the Maximum Value in an Array*
//    - Start by creating a function findMax that takes an array of numbers as its parameter.
//    - Initialize a variable (e.g., let max = array[0];) to store the first element of the array, assuming it to be the maximum.
//    - Use a for loop to iterate over the remaining elements of the array.
//    - During each iteration, compare the current element with max. If the current element is greater, update max.
//    - After the loop, max will hold the largest number in the array. Return this value.
// 2. *Step 2: Apply the Helper Function to Both Arrays*
//    - Use the findMax function to find the maximum value in both input arrays.
//    - Store these maximum values in two separate variables.
// 3. *Step 3: Sum the Maximum Values*
//    - Calculate the sum of the two maximum values obtained from the arrays.
//    - Return the final sum.
// 4. *Step 4: Test with Multiple Scenarios*
//    - Test the function with different arrays to ensure it correctly finds the maximum values and sums them.
// By following these steps, students will have a clear path to solving the problem, allowing them to build their understanding of both array traversal and function utilization in TypeScript.
function findMax(arr1, arr2) {
    let max1 = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > max1) {
            max1 = arr1[i];
        }
    }
    let max2 = arr1[0];
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] > max2) {
            max2 = arr2[j];
        }
    }
    return [max1, max2];
}
let maxNums = findMax([3, 5, 7, 2, 8], [10, 20, 30, 5]);
function findSum(arr1, arr2) {
    let max = findMax(arr1, arr2);
    let findSum = max[0] + max[1];
    return findSum;
}
// console.log(findSum([3, 5, 7, 2, 8], [10, 20, 30, 5]));  //38
// console.log(findSum([1, 2, 3], [4, 5, 6]));  //9
// ### Question 2: *Check if a String is a Palindrome*
// *Problem Statement:*  
// Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward. The function should return true if the string is a palindrome and false otherwise.
// *Example:*  
// typescript
// isPalindrome("madam"); // Output: true
// isPalindrome("hello"); // Output: false
// *Hints:*  
// 1. *Step 1: Normalize the String*
//    - Convert the string to lowercase to handle case sensitivity (str = str.toLowerCase();).
//    - If necessary, remove non-alphanumeric characters (e.g., spaces, punctuation) to focus on the actual content.
// 2. *Step 2: Use Two-Pointer Technique*
//    - Initialize two pointers: one at the start of the string (let left = 0;) and one at the end (let right = str.length - 1;).
//    - Use a while loop to compare characters at these pointers. Continue looping until the two pointers meet in the middle.
//    - If at any point the characters at left and right pointers do not match, return false.
// 3. *Step 3: Complete the Loop*
//    - If the loop completes without finding a mismatch, the string is a palindrome. Return true.
// 4. *Step 4: Test with Various Strings*
//    - Test the function with both palindromes and non-palindromes to verify that it works as expected.
function isPalindrome(str) {
    let lowerStr = str.toLowerCase();
    let pointer1 = 0;
    let pointer2 = lowerStr.length - 1;
    while (lowerStr[pointer1] === lowerStr[pointer2]) {
        pointer1++;
        pointer2++;
        return true;
    }
    return false;
}
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("hello")); //false
console.log(isPalindrome("love")); //false
console.log(isPalindrome("level")); //true
console.log(isPalindrome("Madam")); //true
