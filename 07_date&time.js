let myDate  = new Date()
// console.log(myDate);// out :not readable 2025-04-14T18:35:10.345Z
// console.log(myDate.toString()) // out : it will give the -----Mon Apr 14 2025 18:36:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // out:Mon Apr 14 2025
// console.log(myDate.toJSON()) // out:2025-04-14T18:38:01.491Z
// console.log(myDate.toLocaleDateString()) // out:4/14/2025
// console.log(myDate.toLocaleString()) // out:4/14/2025, 6:39:12 PM
// console.log(myDate.toLocaleTimeString()) //out:6:39:50 PM

// console.log(typeof myDate) // out:object interview questions


let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString()) // out:Mon Jan 23 2023


let newCreatedDate = new Date(2023,0,23,5,3)
//console.log(newCreatedDate.toLocaleDateString())

let formatedNewDate = new Date("2023-01-14")
//console.log(formatedNewDate.toLocaleString()) // out:1/14/2023, 12:00:00 AM


let anotherNewDate =  new Date('12-04-2023')
//console.log(anotherNewDate.toLocaleString())


let myTimeStamp = Date.now()
//console.log(myTimeStamp)

// how to convert date in seconds
// console.log(Date.now()/ 1000) //out:1744656795.467
// console.log(Math.floor(Date.now()/1000))
myTimeStamp.toLocaleString('default',{
    weekday: "long"
})
