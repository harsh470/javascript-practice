const accountId = 1445533
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed 

accountEmail = "har@g.com"
accountPassword = "89883"
accountCity = "Mumbai"

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])


