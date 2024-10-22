// npm install prompt-sync before node randomizer.js

const prompt = require("prompt-sync")();

let array = [];
//get the number of rooms and turn to a number
let nameAmount = prompt("Enter amount of students: ");
nameAmount = Number(nameAmount);

//get all the names of the students
let PickName = () => {
  let userInput = prompt("Enter name: ");
  amount = nameAmount;
  //push to the array
  array.push(userInput);
  if (array.length !== nameAmount) {
    PickName();
  }
};
//randomize the names in the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//create rooms
let roomAssignment = (num, array) => {
//   console.log(array);
  let obj = {};

  for (let index = 1; index <= num; index++) {
    let person1 = array.shift();
    let person2 = array.shift();
    obj[`room ${index}`] = `${person1}, ${person2}`;
  }
  if (array.length === 1) {
    let value = obj[`room ${num}`];
    obj[`room ${num}`] = value.concat(`, ${array[0]}`);
  }
  console.log('----THESE ARE THE ROOM ASSIGNMENTS----' )
  for(let key in obj){
    console.log(key + ': ' + obj[key])
  }
};

PickName();
let arrayNames = shuffle(array);
let numberOfRooms = Math.floor(nameAmount / 2);
roomAssignment(numberOfRooms, arrayNames);
