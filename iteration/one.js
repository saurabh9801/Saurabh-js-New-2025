// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if( i == 5){
        //console.log("5 is the best ")
    }
   // console.log(element);   
}
//console.log(element);// here we will get error bcz it is outside of the loop


// Nested loop
for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value:${i}`);    
  for (let j = 0; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and Inner loop value ${i}`);    
  }    
}


// How to print table at a one time of 10 

for (let i = 1; i <= 10; i++) {
    //console.log(`Table of:${i}`)
    for (let j = 0; j <= 10; j++) {
       //console.log(i + '*' + j + '=' + i * j )        
    } 
}



// how we can use array in forloop
const myArray = ["saurabh","shyam","Raju"]
//console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];  
    //console.log(element)  
}




//break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected value 5")
//         break// if we will use break it break the loop and not execute the below console item
//     }
//    console.log(`value of i is ${index}`);   
// }


//continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected value 5")
        continue// if we will use break it break the loop and not execute the below console item
    }
   console.log(`value of i is ${index}`);   
}