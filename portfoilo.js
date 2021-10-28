
let myArray =["pat", "sara", "ara", "mat"];
let tempArray =[];



// let filteredArray = myArray.map( element => {
   
//     tempArray.push(element.toUpperCase());
//     return tempArray.filter(obj => obj[0] == 'M');
  
// }); 

// let filteredArray = myArray.filter( obj => {
//    return obj[0] == 'm'
// }
  
// ); 

//console.log(filteredArray);

let myArray1 =[20, 30, 40, 40];
let arrayLenghth = myArray1.length;
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(myArray1.reduce(reducer) / arrayLenghth);

//licenseCheck(ages);

