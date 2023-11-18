const marvel_heros = ["thor", "Ironman", "Captain America"]
const Dc_heros = ["Superman", "Batman", "Flash"]


marvel_heros.push(Dc_heros) // push op use

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(Dc_heros) // concat op use

//  console.log(allHeros);


const all_new_heros = [...marvel_heros, ...Dc_heros] //spred op ka use 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 3, 5]]]

const real_another_array = another_array.flat(Infinity) // Flat Infinity op ka use kar ke all data usec kr skte hai


// console.log(real_another_array);



// console.log(Array.isArray("Denny")); //more study
// console.log(Array.from("Denny")); // deep study
// console.log(Array.from({name:"Denny"})); // interesting case for arrays [empty array dega]


let score = 100
let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score, score1, score2, score3));