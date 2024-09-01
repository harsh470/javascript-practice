const marvel = ["thor", "hulk", "ironmen"]
const dc = ["batman", "superman", "flash"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3])
// console.log(marvel[3][0])

const all_hero = marvel.concat(dc)
// console.log(all_hero);

const new_heros = [...marvel, ...dc]
// console.log(new_heros)

const anth_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_anth_array = anth_array.flat(Infinity)
// console.log(real_anth_array)


// console.log(Array.isArray("Harsh"))
// console.log(Array.from("Harsh"))
// console.log(Array.from({name: "Harsh"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3))