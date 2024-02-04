function findLongestWord(inputString){
    let wordArray = inputString.split(" ");
    let longestWord = "";
    let maxLength = 0;
    for(let i = 0; i < wordArray.length; i++){
        let currentWord = wordArray[i];
        if(currentWord.length>maxLength){
            longestWord = currentWord;
            maxLength = currentWord.length;
        }
    }
    return longestWord;
}

let inputString = "We are BangladeshiJonogon people";
const largestWord = findLongestWord(inputString);
console.log("The Largest word is : " , largestWord)