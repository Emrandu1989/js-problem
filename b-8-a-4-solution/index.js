// 1. function will receive a parameter which will be number.

// 2.convert the number to cube.
// 3. return the result;

// 4. return error message if we get other data type instead of number;




function cubeNumber(number){
   //  return error message if we get other data type instead of number;

   if(typeof number !== "number"){
    return "Please provide a number"
   }


   // convert the number to cube.

   const result = Math.pow(number, 3);

//    return the result;
   return result
}

console.log(cubeNumber(5));