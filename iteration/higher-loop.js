// for of loop and also array specific loop
//[{},{},{}] object
//const arr = [1,3,5,6,7,8]
// for (const num of arr) {
//     console.log(num)   
// }


const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
       
        continue
    }
    // console.log(`Each Char is ${greet}`);    
}


//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India") //  if we will add this it will not contain the same value , map method always contain unique value

// console.log(map)
// for (const key of map) {
//     console.log(key); //here it will print in Array but we want key and value for key and value use below codde    
// }


for (const [key,value] of map) {
    //console.log(key,":-", value);// here we are destrucuring the value   
}


const myObject = {
    "In" : "india",
    "Fr":"france"
}

// for (const [key,value] of myObject) {
//     console.log(key,value);//  here we will get error object is not iterateable   
// }


// by forof loop we cant iterate this type of object: to solve this issue go to object.js file 