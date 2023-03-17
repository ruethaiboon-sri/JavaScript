// Create a day of the week translator.
// Your program should read a variable called “dayNumber”,
// and print (with console.log) the corresponding day of the week, where 0 is Sunday and 6 is Saturday.
// For any other values, your program should print “Invalid day number”.
// Test your program for all week days values.


//switch
let dayNumber = Math.floor(Math.random() *7);
console.log(dayNumber);
switch (dayNumber){
    case 0: 
      console.log(`${dayNumber} is Sunday`)
      break;
    case 1: 
      console.log(`${dayNumber} is Monday`)
      break;
    case 2: 
      console.log(`${dayNumber} is Tuesday`)
      break;
    case 3: 
      console.log(`${dayNumber} is Wednesday`)
      break;
    case 4: 
      console.log(`${dayNumber} is Thursday`)
      break;
    case 5: 
      console.log(`${dayNumber} is Friday`)
      break;
    case 6: 
      console.log(`${dayNumber} is Saturday`)
      break;
    default: 
      console.log("Invalid day number")
      break;
}

//else if
let dayNumber1 = Math.floor(Math.random() *7); //จะสุ่ม 0-6
console.log(dayNumber1);
if (dayNumber1 === 0) {
    console.log(`${dayNumber1} is Sunday`);
}
else if (dayNumber1 === 1) {
    console.log(`${dayNumber1} is Monday`);
}
else if (dayNumber1 === 2) {
    console.log(`${dayNumber1} is Tuesday`);
}
else if (dayNumber1 === 3) {
    console.log(`${dayNumber1} is Wednesday`);
}
else if (dayNumber1 === 4) {
    console.log(`${dayNumber1} is Thursday`);
}
else if (dayNumber1 === 5) {
    console.log(`${dayNumber1} is Friday`);
}
else if (dayNumber1 === 6) {
    console.log(`${dayNumber1} is Saturday`);
}
else {
    console.log("Invalid day number");
}