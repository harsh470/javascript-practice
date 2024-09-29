const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

function chai(){
    let username = "harsh"
    // console.log(this.username) //put this will show undefined
}
chai()


const chais  = function(){
    let username = "harrsh"  
    // console.log(this.username)  //put this will show undefined
}
chais()


const coffee = () => {
    let username = "latte"  
    // console.log(this.username) 
}
coffee()


/// +++++++++++ Arrow Function ++++++++++++++++

//Basic arrow function 
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(4,2))

//impicit return arrow function 
// const addOne =(num1,num2) => num1 + num2
const addOne =(num1,num2) => (num1 + num2)
console.log(addOne(9,2))

const addThree = () => ({username:"harsh"})
console.log(addThree())

