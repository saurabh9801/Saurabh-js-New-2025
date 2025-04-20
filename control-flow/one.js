// if statement
// Syntax 
// if(condition){
//     statemnt
// }

const isUserLoggedIn = true
const temperature = 41;

// if(temperature === 50){
//     console.log("tempearture is less than 50");    
// }else{
//     console.log("not less than 50")
// }


// const score = 200;
// if(score > 100){
//     const  power = "fly"
//     console.log(`user fly: ${power}`)
// }
// console.log(`user fly: ${power}`)// here we will get the error power is not defined bcz power is declared insde the loop



// in the below code we will get two output but don't use var instead of this use let and const 
// const score1 = 200;
// if(score1 > 100){
//     var  power = "fly"
//     console.log(`user fly: ${power}`)
// }
// console.log(`user fly: ${power}`)

// conditional operator
// <,>,<=,>=,==,===
// if(2 === "2"){
//     console.log("two is equal to 2 ");

// }
// else{
//     console.log("two is not equal");
// }



//short hand notation
// const balance = 500
// if(balance > 200) console.log("test"),// dont use this type of code
// console.log("test");


// nested loop

// const balance1 = 1000;
// if(balance1 < 500){
//     console.log("less than 500");    
// }else if(balance1 < 700){
//     console.log("less than 700")
// }else if(balance1 < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


// const userLoggedIn = true;
// const debitCard = true;
// if(userLoggedIn && debitCard){  
//     console.log("Allow courses to buy")
// }


// OR Operator here it will check both condition, if one one of the condition would be true than it will execute the code
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true
if (userLoggedInFromGoogle || userLoggedInFromEmail){
 console.log("user logged in")   
}