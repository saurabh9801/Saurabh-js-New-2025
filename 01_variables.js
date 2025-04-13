const  accountID = 134434;
let accountEmail = "saurabh.k@gmail.com";
var accountPassword = "sa@98019";
accountCity = "jaipur"


accountEmail = "sk@gmail.com"
accountPassword = "sdsdsd"
accountCity = "Bangaore"
let accountState;

/* prefer not to use var because of issue in block scope and functional scope */
// accountID = 2   we can not change the const value with the same name 

console.log();

console.table([accountEmail,accountPassword,accountCity,accountState]);