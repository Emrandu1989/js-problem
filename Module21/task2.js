/* 
 Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/


// function countOccurrences(numbers, find){
//     let count = 0;
//     for(let i = 0; i< numbers.length; i++){
//         if(numbers[i] == find){
//             count++
//         }
//     }
//     return count;
// }

// const numbers = [5,6,11,12,98, 5, 11, 11]
// const find1 = 11;
// const outPut = countOccurrences(numbers, find1);
// console.log(outPut);

function countOccurrences(numbers, find){
    let count = 0;
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] == find){
            count++
        }
    }
    return count
}


const numbers = [5,6,11,12,98, 5, 11, 11];
const find1 = 9;
const outPut = countOccurrences(numbers, find1);
console.log(outPut);