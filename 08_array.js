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
// console.log("A", myArray)



// part Array


const marvel_heros  = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);oout:[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] ,  Push method push the data in the same array 
// in this dc_heros it is considered as a element
// console.log(marvel_heros[3][1])if we want to access the value we have to do like this out:flash
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); here it will create a new array using the concat method



// spread operator: it will spread the operator 
const spreadHeros = [...marvel_heros,...dc_heros]
// console.log(spreadHeros); here it will merge the array out:[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array  = [1,2,3,[2,6,7],4,[4,8,7,[0,5]]];
// const real_another_array = another_array.flat(Infinity)
// console.log(another_array);


//how to convert string into array 
// console.log(Array.isArray("saurabh")); out:false
// console.log(Array.from("saurabh")) by using from we can convert the string into array
// console.log(Array.from({name:"saurabh"})); here it will give the [ ]array


// how to add so many varibale into one array

let socre1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(socre1,score2,score3)); out:[100,200,300]




