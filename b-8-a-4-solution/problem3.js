// 1. make a function name as sortMaker(), which will take an array as input.

// 2. access the elements of the input array.

// 3. if any element is negative return "Invalid Input"

// 4. if elements are equal, then return "equal". 
// 5. if elements are not equal, then return in descending order;


//  make a function name as sortMaker(), which will take an array as input.
function sortMaker(arr){
  //  access the elements of the input array.

  const [a,b] = arr;

  //  if any element is negative return "Invalid Input"
   if(a< 0 || b< 0){
    return "Invalid Input";
   }

   //  if elements are equal, then return "equal". 
   if( a===b){
    return "equal";
   }

   //  if elements are not equal, then return in descending order;

   if(a > b){
    return [a, b]
   }
   else{
    return[b,a]
   }



}
const result = sortMaker([5, 8])
console.log(result)
