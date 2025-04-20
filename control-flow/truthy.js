// const userEmail = "sk@gmail.com";
// if(userEmail){
//     console.log("Got user Email")
    
// }
// else{
//     console.log("dont have user email")
// }


const userEmail = "sk@gamil.com";
if(userEmail){
    // console.log("Got user Email")
    
}
else{
    // console.log("dont have user email")//dont have user email
}


//flasy value:false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy vlaue: true,1,"0","false"," ",[],{},function(){}


// to check the array is empty or not
const userEmail1 = []
if(userEmail1.length === 0){
    // console.log("Array is Empty")
}


// to check object is empty or not
// const emptyObject ={}
// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty")
// }

// Nullish coaleshing Operatr (??):null undefined
let val1 =5;

val1 = 5 ?? 10
val1 = null ?? 10
// console.log(val1) out 5
console.log(val1)


var1 = undefined ?? 55
console.log(var1)

val2 = null ?? 10 ?? 20
console.log(val2)



//terniary operator
// condition ? true : false
const icePrice =100;
icePrice <=80 ? console.log("price is less than 80") : console.log("price is greater than 80")