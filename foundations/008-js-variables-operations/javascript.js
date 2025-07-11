let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 10;
console.log(age);

age = 50;
console.log(age);

const pi = 3.14;
console.log(pi);

console.log(3 + 2 - 76 * (1 + 1));

console.log(23 + 97);

console.log(1 + 2 + 3 + 4 + 5 + 6);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);

a = 20;
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

let x = 5;
x++; // increment (and decrement) by 1 ... increment only works on existing variables
let z = x;
console.log(z);

let randomNumber = 10;
randomNumber++;
++randomNumber; // this also works (generally prioritise this, see below why)

let wrongCounterNumber = randomNumber++; // this does not increment the variable
console.log(wrongCounterNumber); // 12 rather than 13
let correctCounterNumber = ++randomNumber;
console.log(correctCounterNumber); // 14 as expected

let number = 20;
number--; // decrement by 1
let newNumber = number;
console.log(newNumber);

let square = 5 ** 2; // operator
let squareFunction = Math.pow(5, 2); // function
console.log(square);
console.log(squareFunction);

let tenNumber = 10;
let tenString = "10";

console.log(tenNumber == tenString); // == equates values
console.log(tenNumber === tenString); // === equates values and their datatypes

console.log(tenString);
console.log(+tenString); // + converts a variable to a number datatype
