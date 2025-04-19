// whatever the value we will write in the global scope we can use in the function easily 
let a = 300; // this is called gllobal scope
if(true){
    let a = 10;
    // console.log("Ineer out:", a); // this is called local or block scope 
    
}
// console.log(a)

//function and clouser
// function one(){

//     const username = "saurabh"

//     function two(){
//         const website = "Youtube"
//         console.log(username)

//     }
//     two()
// }
// one()


// Ex
if(true){
    const username = "sdsdsd"
    if(username ===  "sdsdsd"){
        const website = "insta"
        // console.log(username)
    }
    //console.log(website) //here we will get the error bcz it is outside of the scope
}
//console.log(username)here we will get the error bcz it is outside of the scope



/*==========================interesting============================*/

function addOn(num){
    return num + 1

}
console.log(addOn(5));


const addTwo = function(num){
    return num + 1

}
addTwo(5)
