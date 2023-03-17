const addTwo = num => {
    return num + 2;
  }
  
  //func = function val = value
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2
    let checkB = func(val)
    if (checkA === checkB) {
      return func(val)
    } else {
      console.log('inconsistent results')
    }
  }
  console.log(checkConsistentOutput(addTwo,333));


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(e => console.log(`I want to eat a ${e}`))
//e คือ element ที่อยู่ใน fruits ก็คือเรียกมาทีละตัวโดยการใช้ forEach


//.map = จะสร้างเป็น new array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(e => e[0])
//return index 0 of element = เอาตัวหน้าสุดมา
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(e => e / 100)
console.log(smallNumbers)
  
//findIndex
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals1.findIndex(animal => {
  return animal === 'elephant'
})

const startsWithS = animals1.findIndex(animal => {
  return animal[0] === 's'
})

