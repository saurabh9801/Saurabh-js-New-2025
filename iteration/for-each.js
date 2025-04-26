const coading = ['ja',"c++", "java","git", "cpp","dsds"]
// coading.forEach(function(value) {   
//     console.log(value);// by normal function
    
// });

// by arrow function for each loop
coading.forEach(element => {
    //console.log(element);
    
});

// coading.forEach((item,index,arr) =>{
// console.log(item,index,arr)
// })


const myCoading = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "C++",
        languageFileName: "Cfile"
    },
    {
        languageName : "Python",
        languageFileName: "pythonfile"
    }
]

myCoading.forEach( (item) =>{
    console.log(`Langauge name:${item.languageName}, Language File name :${item.languageFileName}`);

})