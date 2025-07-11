// comparisons

// string comparisons
alert("z" > "a"); // true
alert("glow" > "glee"); // true
alert("bee" > "be"); // true
alert("a" > "A"); // true
alert("2" > "12"); // true

// different types
alert("2" > 1); // true
alert("01" == 1); // true

// boolean values
alert(true == 1); // true
alert(false == 0); // true

// strict equality
alert(0 === false); // false

// null and undefined
alert(null === undefined); // false
alert(null == undefined); // true

// be careful when using comparisons like > or < with variables
// that can occassionlly be null/undefined

// conditional statement syntax
if (hour < 10) {
  greeting = "Good Morning";
} else if (time < 20) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}

// logical operators

// || (or)

// if ANY of the conditions are true, then true
alert(true || true); // true
alert(false || true); // true (only one conditions needs to be true)
alert(true || false); // true
alert(false || false); // false (both conditions need to be false)

if (1 || 0) {
  alert("truthy");
}

let hour = 9;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  // isWeekend is a truthy
  alert("The office is closed");
}
