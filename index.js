var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  // when we put double in our map it will go through the numbers array and put the number in for (x)
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

//vs

//forEach-
var newNumbers = []; // have to create an empty array
number.forEach(function (x) {
  newNumbers.push(x * 2); // pushes into the new empty array
});
console.log(newNumbers);

var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

const newNumbers = numbers.filter(function (num) {
  //didnt create a seperate function like map (although we could) left it anonymous
  return num < 10;
});
console.log(newNumbers);

//vs

//forEach-
var newNumbers = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});
console.log(newNumbers);

var numbers = [3, 56, 2, 48, 5];
//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator); // Helps to see what reduce is doing
  console.log("currentNumber = " + currentNumber); // Helps to see what reduce is doing
  return accumulator + currentNumber;
});
console.log(newNumber);

var numbers = [3, 56, 2, 48, 5];
//Find - find the first item that matches from an array.

const newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber);

//FindIndex - find the index of the first item that matches.
var numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber);

// Shows 1 because the index goes from 0 1 2 3 4 and 56 is the first one > 10 and its in the 1 index spot

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
// Goes through our emojipedia and finds the meaning and makes it only show words from 0 to 100
