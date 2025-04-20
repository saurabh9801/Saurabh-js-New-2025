const user = {
    username:"saurabh",
    price: "999",
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to webiste`);
        console.log(this)
        
    }
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this)out:empty object


// function chai(){
//     const myname = "saurabh"
//     console.log(this.myname)// in function this will not work out:undefined
// }
// chai()


// Arrow function
const chai = () =>{
    let username = "saurabh"
    // console.log(this)
}
chai()

// basics arrow function
// const AddTwoNumber = (num1,num2) =>{
//     return num1 + num2;

// }
// console.log(AddTwoNumber(3,5))

//implict return arrow function 
const AddTwoNumber = (num1, num2)=> (num1 + num2)
console.log(AddTwoNumber(3,6))