if(true){
    let a =10
    const b = 20
     var c = 30
}
// console.log(a)
// console.log(b)
// console.log(c)


let apple = 200 //global scope
if (true){
    let apple = 45 //local scope
    // console.log("Inner", apple);
}
// console.log(apple);


function one(){
    const username = "harsh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()


if (true){
    const username = "harshpandere"
    if(username === "harshpandere"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



//++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5))
function addOne(num){
  return num + 1
}


console.log(addTwo(5))   // will give error because declaration is not done
const addTwo = function(num){
    return num + 2
}
