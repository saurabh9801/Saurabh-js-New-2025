const myNums = [1,3,4,5,6]
const newValue = myNums.reduce(function(acc,currval){
    // console.log(`acc value ${acc} and currvalue  is ${currval}`)
    return acc + currval

},0)// here 0 is initial value whatever the value wwe will give like 0,5 it will take
// console.logtotal(newValue)


// how we can write same function in arrow function
const arrowFun = myNums.reduce((acc,curr) => acc + curr,0)
// console.log(arrowFun)




// Basically reduce is being used in the shoppingCart
const shoppingCart = [
    { itemName: 'T-shirt', price: 20 },
    { itemName: 'Jeans', price: 50 },
    { itemName: 'Sneakers', price: 80 },
    { itemName: 'Hat', price: 15 },
    { itemName: 'Backpack', price: 45 }
  ];
const totalToPay = shoppingCart.reduce( (acc,item)=> acc + item.price,0)  
console.log(totalToPay);
