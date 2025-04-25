const myObject = {
    js : "javascript",
    c : "c++",
    rb : "ruby"
}

// use for in loop
for (const key in myObject) {
    // console.log(key); //here we will geet the key  but how to get value   : for value use the below code
}


for (const key in myObject) {
//   console.log(myObject[key]) // by this way we will get the value of key
}



const programing = [
    "js","cpp","java","df"

]
for (const key in programing) {
    console.log(key)
   console.log(programing[key]); //if we will use for in loop in array it will give key
   
}