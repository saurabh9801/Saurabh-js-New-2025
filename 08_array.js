const  myArray = [0,1,2,3,4,5];
const myHeros = ["slaman khan","dipika","dddsd","sdsdsd"]
// console.log(myArray[3]);
// console.log(myArray[7]) // out: undefined bcz index is not available

const myArr2 = new Array(1,2,3,4)


// Array Methods
// myArray.push(6)//out: it will push the value is existing array
// myArray.push(7)
// console.log(myArray)// out:[0, 1, 2, 3,4, 5, 6,7]

// myArray.unshift(9)// out: it will insert a value in the starting
// console.log(myArray) 


//console.log(myArray.includes(10))// out: it will give the output in true or false, here 10 is not available in the original array that's why output is false

const newArray = myArray.join()
// console.log(myArray); // here  it wiil be return the same array [0,1,2,3,4,5], here type is object
// console.log(newArray)// here it will 1,2,3,4,5 but type is stirng 
// console.log(typeof myArray)
// console.log(typeof newArray)


// slice & splice
console.log("A", myArray)
