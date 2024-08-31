// Dates 

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString()) ; 
// console.log(myDate.toLocaleTimeString()) ; 
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,18)
// console.log(myCreatedDate.toDateString());

// let myCreatedNewDate = new Date(2024,0,18,5,3)
// console.log(myCreatedNewDate.toLocaleString());

let myCreatedDate1 = new Date("2024-01-18")
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2024")
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()} `);

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
// }))