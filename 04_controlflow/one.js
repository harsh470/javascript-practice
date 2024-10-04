// if  else
const temperature = 40 
if(temperature < 50){
    // console.log("Ideal temperature");
} else {
    // console.log("Its hot")
}

const score = 200
if(score > 100){
    const power ="fly"
    // console.log(`User power: ${power}`);
}

// const balance = 1000
// if(balance > 500) console.log("test"); //implicit scope


const balance = 650
if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 950){
    console.log("less than 950");
}else {
    console.log("less than 1220");
}


const userLogIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail =true
if (userLogIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged,in");
    
}