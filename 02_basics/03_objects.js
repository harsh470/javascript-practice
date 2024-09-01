// Object "constructor" se banega to Singleton se hi banega 
// Object.create


//Object literals
const mySym = Symbol ("key1")

const JsUser = {
    name: "Harsh",
    "full name": "Harsh Pandere",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumabai",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "harry@m.com"
// console.log(JsUser.email)
// Object.freeze(JsUser);
JsUser.email = "Harsh@ms.com"
// console.log(JsUser);


JsUser.greeting = function(){
    // console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`hello JS user ,${this.name}`);  // string interpolation
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());