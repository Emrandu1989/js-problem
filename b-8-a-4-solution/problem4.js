//1. define a function named as "findAddress()"
// 2. access the element of the object.
// 3. form the string as given sample -"10, 15A, Earth Perfect"
// 4. replace the missing property with __;

// 5. return the string


// define a function named as "findAddress()"
function findAddress(obj){

    //  access the element of the object and replace the missing property with __;
    const street = obj.street || "__" ;
    const house = obj.house || "__";
    const society= obj.society || "__";

    // form the string as given sample -"10, 15A, Earth Perfect"

    const str = street+ ","+house+"," +society;

    //  return the string;
    return str;



}
const obj = {
    street: 10,
    house:"15A",
    // society: "Earth Perfect"
}
const result = findAddress(obj);
console.log(result);