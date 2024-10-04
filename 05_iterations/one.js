//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 best number")
    }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j < 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop ${i}`)
        // console.log(i + '*' + j + '=' + i*j);
    }

    // console.log(`outerloop: ${i}`)
}

let myArray = ["flash, batman, superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}


// break 

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`Detected 5 number`)
        break
    }
    console.log(`value of i is ${index}`)
}

//continue
for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`Detected 5 number`)
        continue
    }
    console.log(`value of i is ${index}`)
}


