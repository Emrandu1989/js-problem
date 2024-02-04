/* 
  Task-3:
Write a function to count the number of vowels in a string.
*/

function countVowels(str){
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o','u'];
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count

}

const str = "hello world We are coming";
const numVowels = countVowels(str);
console.log("Number of vowels in" + str + " ': ",numVowels)
