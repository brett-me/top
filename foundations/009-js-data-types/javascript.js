// dynamically typed
let message = "hello"; // string
console.log(message);
message = 12345; // number
console.log(message);

// only number, no difference between integer and float
let n = 123; // this integer is a number
console.log(typeof n);
n = 1.23; // this float is also a number
console.log(typeof n);

// special numbers (ensures programme runs despite fatal errors)
let divisionError = 1 / 0; // Infinity
console.log(divisionError);
let typeError = "not a number" / 2; // NaN (not a number)
console.log(typeError);
// NaN is sticky
let stickyNaN = NaN + 1;
console.log(stickyNaN);

// BigInt, numbers greater than (2**57 - 1)
let bigInt = 1234567890123456789n; // n at the end indicates BigInt
console.log(bigInt);
console.log(typeof bigInt);

// strings with embedded variables or expressions
let userName = "John"; // typical string
let helloUserName = `Hello ${userName}`; // use backticks and $ to reference
console.log(helloUserName);
let messageResult = `The result is ${1 + 1}`;
console.log(messageResult);

// null, special value that represents "nothing"
let age = null;
console.log(age);

// undefined, "value is not assigned"
let color;
console.log(color);

// use typeof to check data type
