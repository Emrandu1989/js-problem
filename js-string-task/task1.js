/* Task-1:
Count how many times a string has the letter a */



let string = 'imran is a good boy and you should like him';
// let count = 0;
// for(let i = 0; i< string.length; i++){
//     if(string[i] === "a" ){
//         count++;
//     }
// }
// console.log(count)

function countLetterA(str){
    let count = 0;
    for( let i = 0; i< str.length; i++){
        if(str[i].toLowerCase() === "a"){
            count++
        }
    }
    return count;

}

let myString = "An apple a day keeps the doctor away";
const result = countLetterA(myString);
console.log(result);