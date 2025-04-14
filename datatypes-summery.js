/*========================================= */
// Stack(Primitive),Heap(Non-primitive)

let myYoutubeName = "saurabhkr";
let anotherName = myYoutubeName;
anotherName = "newKrsaurabh"
// console.log(myYoutubeName);
// console.log(anotherName)


let UserOne = {
    email : "sk@gmail.com",
    upi : "skicici@ybl"

}
let userTwo  = UserOne;
userTwo.email = "saurabh@google.com"
console.log(UserOne.email);// out:saurabh@google.com
console.log(userTwo.email)// out:saurabh@google.com
