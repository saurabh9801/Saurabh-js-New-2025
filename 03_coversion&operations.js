let score = 33;
//console.log(typeof (score));

let newScore = "55"
///console.log(typeof(newScore)); // output is string 

// how to convert newScore into number
let convertedValue = Number(newScore);
//console.log(typeof(convertedValue)) //output is number



let score1 = "33abcc"
//console.log(typeof(score1))
let newVlaue = Number(score1)
// console.log("score1 converted value:", typeof(newVlaue))
// console.log(newVlaue) // it will show NAN 
// console.log("score1 value:" ,typeof(score1))


// Null
let score2 = null
//console.log("the type of score2 is :", typeof(score2))
let newVlaue1 = Number(score2)
// console.log("score1 converted value:", typeof(newVlaue))
// console.log(newVlaue) // it will show NAN 




// Note:
//"33" => 33
// "33abc" = NAN
// true = 1;
//  false = 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)// output : ture

let isLooged = "";
let booleanLogged = Boolean(isLooged)
// console.log(booleanLogged) // output: false

// 1 => true
// 0 => false
// "" > false
// "sauarabh" => "true"


// convert number into string 

let someNumber = 33;
let stringNumber = String(someNumber)
// console.log(stringNumber) // output is 33 
// console.log(typeof(stringNumber)) // but here it is converted into string 



/* *********************************** */
let value = 5
let negvalue = - value
// console.log(negvalue);
// console.log( 5 + 5)
// console.log(10 - 5)
// console.log( 10 * 5)
// console.log(2**3)
// console.log(50 / 6)
// console.log(20%3) // here remainder will be the output



// console.log("1" + 2) // no conversion
// console.log(1 + "2") // no conversion
// console.log("1" + "2")// no conversion
// console.log("1" + 2 + 2) //output : 122
// console.log(1+2+ "2") // output 32


// console.log(+true) // output 1
// console.log(true+) // its not possible
// console.log(+"") output 0


let x = 3;
const y = x++;

// console.log(y); // output is 3


let a = 3;
const b = ++a;

// console.log("valure of b :",b); //output  is 4


let x1 = 3;
const y1 = x++;
console.log(y1)

let x2 = 3n;
const y2 = x2++;
console.log(y2)


