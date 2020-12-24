// array destructuring

[x,y] = [23,56,89];
console.log(x,y);

let [x,y,...rest] = [23,56,89,90,80];
console.log(rest);
const numbers = [23,56,89,90,80];
[x,y,...rest] = numbers;
console.log(rest);
({x,y,...rest} = {x:34, y:90,z:89,w:97});
console.log(rest);
