let Car = function (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(name){
        return `${name} is driving car`
    };
    
};

let myCar = new Car('Nisan', 'A123', 2003);
console.log(myCar);
console.log(myCar.drive('Jack'));

let myCar1 = new Car('Honda', 'H435', 2010);
    console.log(myCar1);
    console.log(myCar1.drive('Jill'));

//เข้าถึง nested object เช่น ข้างล่างนี้เข้าถึง nanno.... -> back-up (เขียนเป็น . นำหน้าไม่ได้เพราะมีเว้น/ขีด เลยต้องใช้ [] -> battery)
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

//function นี้เปลี่ยนค่าได้ ถึงตัวที่ถูกเปลี่ยนจะเป็น const
//Pass By Reference
const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
   
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };
   
  paintIt(spaceship);
   
  spaceship.color // Returns 'glorious gold'

  let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
  };
  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };
  tryReassignment(spaceship) // The attempt at reassignment does not work.
  spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
   
  spaceship = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works.


  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil'
  }
  let remotelyDisable = (obj) => {
    obj.disabled = true
  }
  
  greenEnergy(spaceship)
  remotelyDisable(spaceship)
  console.log(spaceship)


  //Loop through Objects
  
  let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
//loopCrew คือ เรียกตัว key ใน crew มาเฉยๆ ส่วน spaceship.crew[loopCrew].name ก็คือเข้าไปที่ crew ที่โดนเรียก แล้วเอา name มา
for (let loopCrew in spaceship.crew){
  console.log(`${loopCrew}: ${spaceship.crew[loopCrew].name}`)
}
for (let crewMembers in spaceship.crew){
    console.log(`${spaceship.crew[crewMembers].name}: ${spaceship.crew[crewMembers].degree}`)
  }