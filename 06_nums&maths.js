/*Numbers */

const score = 500;
//console.log(score)

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // out 100.00

const otherNumber = 123.554;
//console.log(otherNumber.toPrecision(4));

const hundreds =  1000000
// console.log(hundreds.toLocaleString()) // out:1,000,000 us value
// console.log(hundreds.toLocaleString('en-IN')) //out:1,00,000




/* Maths */
// console.log(Math);
// console.log(Math.abs(-4)) // it will give the positive value
// console.log(Math.round(4.6)) // recom use round value 
// console.log(Math.ceil(5.3)) // it will give the    value 6
// console.log(Math.sqrt(5))
// console.log(Math.min(4,6,1,7,9))// here it will find the min value
// console.log(Math.max(56,89,75,37))// it will find the max value



// console.log(Math.random())// here it will generate the random value between 0 and 1
// console.log((Math.random() * 10) + 1)

const min = 10
const max =20

console.log(Math.random() * (max - min + 1 )) // here it will genearte the random value with decimal 
console.log(Math.floor(Math.random() * (max - min + 1 )) +  min ) // here it will generate the random value without decimal

  