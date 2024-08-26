const name = "harsh"
const repoCount = 40

// console.log(name + repoCount + " Value")  // not recommended 

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);    recommended 


const gameName = new String('harsh-pandere')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-13, 4)
// console.log(anotherString)

const newStringOne = "  hitesh  "
// console.log(newStringOne)
// console.log(newStringOne.trim())


const url = "https://harsh.com/harsh%20pandere"
// console.log(url.replace('%20', '-'))

// console.log(url.includes('harsh'))
// console.log(url.includes('klaw'))


const fileName = new String ('harry-potter-goblin')
// console.log(fileName.split('-'))