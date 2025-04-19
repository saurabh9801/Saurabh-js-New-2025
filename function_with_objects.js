function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(2)); but if we will pass more value what will happen
// console.log(calculateCartPrice(200,400,600)); here out will show only 200 bcz it is taking only one value to solve this issue wwe have use rest or spread opeerator, after used this it will convert it into array


// how to use object in function
const user ={
    username : "saurabh",
    price : 399
}

// function handleUser(anything){
//     console.log(`user name is ${anything.username} and price is ${anything.price}`);
    
// }
// handleUser(user)


// how to use obejct in function
const newArray = [200,300,400]
function objectFun(anyArray){
    return anyArray[0]
}
console.log(objectFun(newArray))