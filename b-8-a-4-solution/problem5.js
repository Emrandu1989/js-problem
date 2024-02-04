// make a function named as canPay(), this will take two input parameters

// make sum of all the elements of the array.

// if the sum is greater than equal second input parameter , return true;

// else return false;

// if first input is an empty array, return error message;






// make a function named as canPay(), this will take two input parameters

function canPay(changeArray, totalDue){
  // if first input is an empty array, return error message;
   if(changeArray.length ==0){
      return "The array is empty"
   }

    // make sum of all the elements of the array.
   let sum = 0;
   for(let i = 0; i < changeArray.length; i++){
    const element = changeArray[i];
    sum += element;
   }
  // if the sum is greater than equal second input parameter , return true;

//   else return false;
   if(sum >= totalDue){
        return true;
   }
   else{
    return false;
   }
}

const result = canPay([1, 5, 5], 10)
console.log(result)