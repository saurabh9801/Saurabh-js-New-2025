function myFunction(){
    // console.log("s");
    // console.log("a");
    // console.log("u");
    // console.log("r");
    // console.log("a");
    // console.log("b");
    // console.log("h");
}
myFunction()

function addTwoNumber(n1,n2){
    // console.log(n1 +  n2);    
}
addTwoNumber(5,7)


// other method
// function twoNumber (n3,n4){
//     return n3 + n4;
// }
// const result = twoNumber(4,8)
// console.log(result);


function userLoggedIn(username){
    // 1st way
    // if(username === undefined){
    //     console.log("Please enter the username");  
    //     return;      
    // }
    // 2nd way
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username}  just logged in`
}
// console.log(userLoggedIn());// if we will not pass anything inside the funtion it will show the undefined :undefined  just logged in
console.log(userLoggedIn("saurabh"))//out:saurabh  just logged in

