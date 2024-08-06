// *2nd Day Task Of 30 Days Challenge From Hello Coders Team*

// Question 3:
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

// Requirements:

// If the array has only one element, the function should return an array with that element duplicated.
// Ensure the function handles arrays with a single element correctly.
function returnFirstNdLast(array:number[]):number[]{
    if(array.length === 1){
        return [array[0] , array[0]]
    }else{
        return [array[0] , array[array.length-1]]
    }
}
// console.log(returnFirstNdLast([9]))  //[ 9, 9 ]
// console.log(returnFirstNdLast([13,3,4,5,6,6]));  //[ 13, 6 ]



// Question: 4 
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

// Requirements:

// The function should handle arrays with positive and negative numbers.
// If the array contains only one number, return that number.
// Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
// Note:
// This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.

function largestNum(array:number[]):number{
    let largestNum= array[0]
    if(array.length === 1){
        return largestNum
    }
    for(let i=0;i<largestNum;i++){
        if(array[i]> largestNum){
        largestNum = array[i]
    }
    
    }
   return largestNum
}
console.log(largestNum([3,5,6,-78,8,9,0]))  //9
console.log(largestNum([3,6,-9,+6]));  //6 
console.log(largestNum([9]));  //9
console.log(largestNum([]));