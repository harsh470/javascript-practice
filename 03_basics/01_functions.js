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


function loginUser(username ="vikas"){
    if(username === undefined){    //(!username)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser())
// console.log(loginUser("harsh"))


function calculateCartPrice(val1, val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 300, 400,320))


const user ={
    username : "harsh",
    price : 993
}
function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
//OR use this method 
// handleObject({
//     username: "nim",
//     price: 99
// })


const myNewArray = [200,330, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,330,400,500]))