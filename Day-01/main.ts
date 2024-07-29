// I challenge you to tackle a simple algorithmic problem, such as finding the sum of elements in an array. ### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.

// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15

let array:number[] = [1,2,3,4,5]
let array1:number[] = [3,5,6,6,7]
function sumArray(num:number[]):number{
    let sum = 0;
for(let i = 0 ; i < num.length ; i++){
    
    sum = sum + num[i] 
}
return sum
}

console.log(sumArray(array));  //15
console.log(sumArray(array1)); //27

// Question 2: Reverse a String
// Instructions:

// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:

// Input: "hello"
// Output: "olleh"

function reverseString(input:string){
    let reverseString:string[] =[]
    
    for(let i=input.length-1;i>=0;i--){
        reverseString.push(input[i])
    }
    console.log(reverseString.join("").trim())   
}
reverseString("Naimal")  //lamiaN
reverseString("    How are you    ") //uoy era woH
reverseString("Get Lost!   ")  //!tsoL teG
