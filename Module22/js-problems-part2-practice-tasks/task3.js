/* 
  
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(totalLaptop, totalTablets, totalMobile){
    
    let perLaptopPrice = 35000;
    let perTabletPrice = 15000;
    let perMobilePrice = 20000;

    let totalLaptopPrice = totalLaptop * perLaptopPrice;
    let totalTabletsPrice = totalTablets * perTabletPrice;
    let totalMobilePrice = totalMobile * perMobilePrice;

    const totalMoneyRequired = totalLaptopPrice + totalTabletsPrice + totalMobilePrice;

    return totalMoneyRequired;

}

const result = calculateElectronicsBudget(2, 3, 5);
console.log(result);