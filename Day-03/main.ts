// Hello Coders 30-Day DSA Challenge: Day 3 Tasks

// Welcome to Day 3 of the 30-day DSA challenge by Hello Coders! Today, we have two interesting tasks for you to enhance your TypeScript skills. Remember, *do not use built-in methods* to solve these problems. Let's dive in!

// Question 5:
 
// Remove Duplicates from Array
// Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed. 
// *Do not use built-in methods* like Set.

// Requirements:
// - The function should iterate through the array and check for duplicates manually.
// - You can use additional arrays or variables to keep track of seen elements.
// - Do not use any built-in methods like filter, reduce, or Set.

// Example:
// typescript
// function removeDuplicates(arr: number[]): number[] {
//     // Your code here
// }

// // Example usage:
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([10, 10, 20, 30, 30]));  // Output: [10, 20, 30]
function removeDuplicates(num:number[]):number[]{
    let seenElement:number[] = []
    let removedDuplicate:number[] = []
        for(let j=0;j<num.length;j++){
            if(!seenElement.includes(num[j])){
                seenElement.push(num[j])
                removedDuplicate.push(num[j])
            }
        }
    
    return removedDuplicate
}
console.log(removeDuplicates([2,4,3,2,5,6,2,1,1]))
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([10, 10, 20, 30, 30])); 
// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.

// Requirements:
// - The function should manually find the largest and second largest numbers by iterating through the array.
// - You can use additional variables to keep track of the largest and second largest numbers.
// - Do not use any built-in methods like sort.

// Example:
// typescript
// function findSecondLargest(arr: number[]): number {
//     // Your code here
// }

// // Example usage:
// console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
// console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
function findSecondLargest(array:number[]){
    let largestNum = array[0]
    let secondLargest = array[0]
    for(let i=0;i<array.length;i++){
        if(array[i] > largestNum){
            largestNum = array[i]
        }
        for(let j=0;j<array.length;j++){
            if(array[j] < largestNum && array[j] > secondLargest){
                secondLargest = array[j]
            }
        }
      
    }
    return secondLargest
   
    
    
}
// console.log(findSecondLargest([1, 2, 3, 4, 5]));
// console.log(findSecondLargest([10, 20, 30, 15, 25]));

