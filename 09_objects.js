//singelton
//object literals

const mySymbol = ("Key1")
const JsUser = {
    name: "saurabh",
    "full name":"saurabh kumar",
    [mySymbol] :"myKey1",
    age: 25,
    location: "bangalore",
    email : "sk@gmail.in",
    isLoggedIn : false,
    lastLoginDays :["Monday","Tuesady"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymbol])


// how to chnage the value of the object


JsUser.email = "skp@gmail.com";
// console.log(JsUser.email);


// How to freeze the object vlaue 
// Object.freeze(JsUser)
// JsUser.email = "dsdsds@gmail.com"
// console.log(JsUser)


//function
JsUser.greeting = function(){
    // console.log("hi saurabh");
    
}
// console.log(JsUser.greeting) out:[Function (anonymous)]
// console.log(JsUser.greeting()) out:hi saurabh
// undefined


// how to take the refernce of the object in function
JsUser.greetingTwo = function(){
    // console.log(`Hello Js user, ${this.name}`);//here this take the refrence of the object and what are the property in the Jsuser object
    
}
// console.log(JsUser.greetingTwo())


//de-structuring of the object
const course ={
    price : 999,
    cousreIntructuor :"saurabh"
}
// course.cousreIntructuor
const{cousreIntructuor: instructor } = course
// console.log(instructor);

// JSON Format key and value shoude be in string

{
    "name" :"saurabh",
    "age":35,
    "price":"free"
}