function sayMyName(){
    // console.log("H")
}
sayMyName()


// function addTwoNumber(num1, num2){
//     console.log(num1 + num2)
// }
// // addTwoNumber(2,3)


function addTwoNumber(num1, num2){
    // let result = num1 + num2 
    // return result
    
    return num1 + num2
}
const result = addTwoNumber(3,5)
// console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("harsh"))
// console.log(loginUserMessage())


function loginUser(username = "vikas"){
    if(username === undefined){    //(!username)
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser())
// console.log(loginUser("harsh"))

