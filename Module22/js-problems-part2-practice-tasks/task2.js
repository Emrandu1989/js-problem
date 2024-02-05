/* 
  Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


*/
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = names[0];
let smallestLength =names[0].length; 

 for(let i = 0; i < names.length; i++){
    if(names[i].length < smallestLength){
        smallestName = names[i];
        smallestLength = names[i].length;
    }
 }
console.log("Friend with the smallest name : ", smallestName);