let text = "hello, my name is Brett";
let textLength = text.length;
console.log(textLength);

// extracting string characters (at, charAt, charCodeAt)
let helloWorld = "Hello World";
let charStart = helloWorld.charAt(0); // older method, doesnt allow negative index
console.log(charStart);

let charUnicode = helloWorld.charCodeAt(0);
console.log(charUnicode);

let charEnd = helloWorld.at(-1); // newer method, allows negative index
console.log(charEnd);

// string slice
let sentence = "Hi, my name is Brett";
let nameSlice = sentence.slice(-5, -1);
console.log(nameSlice);

let nameSubstring = sentence.substring(0); // difference between slice & substing not clear yet
console.log(nameSubstring);

// lower and uppercase
let sentenceLower = sentence.toLowerCase();
console.log(sentenceLower);

let sentenceUpper = sentence.toUpperCase();
console.log(sentenceUpper);

// trim, trimStart, trimEnd
let userInput = " Hello ";
console.log(userInput.trim());
console.log(userInput.trimStart());
console.log(userInput.trimEnd());

// padStart() and padEnd
let digit = "5";
console.log(digit.padStart(5, "1234")); // (total length, string to be added)
// note: string to be added fits total length, if short, char repeated, if long, char cut

// repeat(): returns a number of string copies
let repeatExample = "This text will be repeated";
console.log(repeatExample.repeat(5));
// note: no line break between repeats

// replace(): returns a new string
let replaceExample = "My name is Brett, Brett the coder";
console.log(replaceExample.replace("Brett", "Leroy")); // replaces first match
console.log(replaceExample.replace(/brett/i, "Leroy")); // insensitive flag
console.log(replaceExample.replace(/Brett/g, "Leroy")); // replace all flag

// split(): returns array spit on character specified
wordSplit = "words in an array";
console.log(wordSplit.split(" "));

charSplit = "chars in an array";
console.log(charSplit.split(""));

csvSplit = "Typical, For, CSV, data";
console.log(csvSplit.split(","));
