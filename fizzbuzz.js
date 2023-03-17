// const numbers = []
// const n = 16 
//   for (let i = 1; i <= n; i++){
//     if (i %3 === 0 && i %5 ===0){
//       numbers.push("FizzBuzz")
//     } else if (i %5 ===0){
//       numbers.push("Buzz")
//     } else if (i %3 === 0){
//       numbers.push("Fizz")
//     } else {
//       numbers.push(i)
//     }
//   }
// console.log(numbers)

const numbers = []
fizzbuzz = n => {
  for (let i = 1; i <= n; i++){
    if (i %3 === 0 && i %5 ===0){
      numbers.push("FizzBuzz")
    } else if (i %5 ===0){
      numbers.push("Buzz")
    } else if (i %3 === 0){
      numbers.push("Fizz")
    } else {
      numbers.push(i)
    }
  }
  console.log(numbers)
}
fizzbuzz(6)

