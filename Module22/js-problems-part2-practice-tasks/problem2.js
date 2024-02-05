/* 
  Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


*/

const names = ['rahim', 'robin', 'rafique', 'ronbir', 'rashed'];

let smallestName = names[0];
let smallestLength = names[0].length;

for(let i = 0; i< names.length; i++ ){
    if(names[i].length < smallestLength ){
        smallestName = names[i];
        smallestLength = names[i].length;
    }

}
console.log("The smallest name is: ",smallestName, ", And The length of the smallest name is : ", smallestLength, "Character")