const authors = ["Bishnu", "bikram", "Elisha"]
authors.push("Sheprata");
console.log(authors);
authors.pop("Sheprata");
console.log(authors);

console.log(authors.length);
let f = authors[0];
let l = authors[authors.length -1];

console.log(f);
console.log(l);

authors.shift("Bishnu");
console.log(authors);
authors.unshift("Dhriti");
console.log(authors);

authors.splice(2,1);
console.log(authors);

let authorsStartingWithB = authors.some(x=>x.startsWith("b"));
console.log(authorsStartingWithB);
authors.push("bishnu");
console.log(authors);
let allAuthorsStartsWithB = authors.every(x=>x.startsWith("b"));
console.log(allAuthorsStartsWithB);


let sum = (x,y,z) => x+y+z;
let number =[2,3,4,5,6];
console.log(sum(...number));