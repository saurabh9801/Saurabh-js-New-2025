// Immediatly invoked function expressions(IIFE)
(function chai(){
    // this function is called named IIFI
    // console.log(`DB Connected`);
    
})();  // here ; is mendatory bcz here the first code is ending if we'll not use ; below code will not work 

//syntax is ()(), first () is for writing the function and 2nd is for () , execution of the function
( () =>{
    // This function is callled unnamed IIFI
    console.log(`Db connected`)
})()