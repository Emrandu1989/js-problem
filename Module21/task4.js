/* 
 Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function findLongestWord(inputString){

    const wordsArray = inputString.split(" ");
    let longestWord = "";
    let maxLength = 0;


   

    for(let i = 0; i< wordsArray.length; i++){
        let currentWord = wordsArray[i];
        if(currentWord.length > maxLength){
            longestWord = currentWord;
            maxLength = currentWord.length;

        }
    }
    return longestWord;
}

const inputString = "I am learning Programming to become a programmer in javascript";
const longestWord = findLongestWord(inputString);
console.log("The Longest word is : ",longestWord);

// function findLongestWord(inputString){
//      const wordsArray = inputString.split(" ");
//      let longestWord = "";
//      let maxLength = 0;

//      for(let i = 0; i< wordsArray.length; i++){
//         const currentWord = wordsArray[i];
//         if(currentWord.length > maxLength){
//             longestWord = currentWord;
//             maxLength = currentWord.length;
//         }
//      }

//      return longestWord;
// }

// const inputString = "I am learning Programming to become a programmer in javascript";
// const longestWord = findLongestWord(inputString);
// console.log("The Longest word is : ",longestWord);