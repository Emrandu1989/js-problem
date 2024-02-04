/* 
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

// function converter(celsius){
//     let fahrenheit = 9/5 * celsius;
//      fahrenheit += 32;
//      return fahrenheit;

// }


// let celsius = 40;
// let result = converter(celsius);
// console.log(result)


function converter(celsius){
      let fahrenheit = 9/5 * celsius;
      fahrenheit += 32;
      return fahrenheit;
}

let celsius = 37;
const result = converter(celsius);
console.log(result.toFixed(2))