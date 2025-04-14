const name = "ssauarbh";
const repoCount  = 50
// console.log(name +  repoCount + "value");// out:sssaurabh50value


// string intropolation
// console.log(`Hello my name is ${name} and repocount is ${repoCount}`);//out:Hello my name is ssauarbh and repocount is 50



const gameName = "foootball-hc";
// console.log(gameName[0]);  // out:f
// console.log(gameName.__proto__); out:{}--- this is called object
// console.log(gameName.length);
// console.log(gameName.charAt(0))
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf("t"));
// const newString  = gameName.substring(0,5) //here i am doing slicing
// console.log(newString);

// const  anotherString = gameName.slice(-2, 3);
// console.log(anotherString)

const newStringOne = "   saurabh "
console.log(newStringOne);// output : first space will come than saurabh 
// how we can remove space : by using trim function
console.log(newStringOne.trim()) // trim remove the whitespaces



const url = "https://saurabh.com/sk%20sauarabh"
const newUrl = url.replace('%20','-');// here it will replace the %20 with -
console.log(newUrl)


const stringNew = "sdsd-dsdd-sas"
console.log(stringNew.split("-")) // it will give an array out:[ 'sdsd', 'dsdd', 'sas' ]







