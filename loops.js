//for loops
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`)
}

//do while
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup(s) was added') 
} while (cupsAdded < cupsOfSugarNeeded);


//whale talk
const input = "turpentine and turtles"
const vowels = ['a','e','i','o','u']
const resultArray = []

for (let i = 0; i < input.length; i++){
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i])
}
  //การเพิ่มเสียง e ทำแค่ตอนที่เจอ e เพิ่มก่อน
  for (let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i])
    }
    }
  }
const resultString = resultArray.join("")
console.log(resultString.toUpperCase())


