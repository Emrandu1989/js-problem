// we will write a function named as "matchFinder()" which will take two input.

// will try to find match between the two strings.
// return true/false based on the match.
// return error message if the parameter are not string.


function matchFinder(string1, string2){
    // will try two find match between the two strings.
    if(typeof string1 !== "string"  || typeof string2 !== "string"){
        return "Please specify string as input parameter"
    }
    const result = string1.includes(string2);

    // return true/false based on the match.
    return result;
}

const str1 = "Imran";
const str2 = "12"
const name1 = "JavaScript";
const name2 = "12"

const result = matchFinder(str1, str2);
const result2 = matchFinder(name1, name2);
console.log(result)
console.log(result2)
