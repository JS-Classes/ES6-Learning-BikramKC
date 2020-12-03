// string literals
let hack = 'Hackathoon 2020'
let name = `cotiviti ${hack}
dfdjjf`;
console.log(name);
let x = 'Male';
let y = 'Female';
let isMale = true
let z = `${isMale ? x : y}`;
console.log(z);
let x1 = "djfdfhdhfhdhfhd3434kk343k4";
let rx = /dj/;
let rx1 = new RegExp(/\d/);
let m = x1.match(rx);
console.log(m);

let message = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.";
let regexVowels = /[aeiou]/g;
console.log(message.match(regexVowels));
// g: global , i: case insensitive, m: multiline
let twoLetterWords = /\b\w{2}\b/g
console.log(message.match(twoLetterWords));
// \b: boundary, \w: word, {} number of word character
let msg = `I am 10 years old and my father is 45.
I am 10 years old and my father is 45. Area of rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of rectangle1 is 234 m^2`;
let regexNumberMatch = /\d+/g
console.log(msg.match(regexNumberMatch));
// quantifier *, +, ?
let email = "abc234@xyz.com abc234@xyz.net";
let regexEmail = /[a-z]+\w*@[a-z]+.(com|net)/g
console.log(email.match(regexEmail));