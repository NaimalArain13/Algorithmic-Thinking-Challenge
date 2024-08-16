"use strict";
// Day 17
// ### Question 1: *Calculate the Product of Odd Numbers*
// Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.
// *Example:*
// typescript
// console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
// console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
// *Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.
// ---
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
    let productOdd = 1;
    for (let i = 0; i < oddNum.length; i++) {
        productOdd *= oddNum[i];
    }
    return productOdd;
}
console.log(productOdds([2, 3, 5, 6])); //15
console.log(productOdds([2, 4, 6, 8])); //1
// ### Question 2: *Find the Longest Word in a Sentence*
// Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.
// *Example:*
// typescript
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
// *Hint:* Split the sentence into words, compare their lengths, and return the longest one.
function findLongest(sentence) {
    let splitWord = sentence.split(" ");
    let pointer1 = splitWord[0];
    for (let pointer2 = 1; pointer2 < splitWord.length; pointer2++) {
        if (splitWord[pointer2].length > pointer1.length) {
            pointer1 = splitWord[pointer2];
        }
    }
    return pointer1;
}
console.log(findLongest("The quick brown fox jumps over the lazy dog")); //quick
console.log(findLongest("I love coding in TypeScript")); //typeScript
