// Redeclaration allowed with var

var x = 345;
var x = "dfjdjf";

// Redeclaration is not allowed with let

let y = "dkdkf";
// let y = 123; // not allowed
console.log(y);

// No mutation is allowed in const
const z = "abc";
// z = "xyz"; // not allowed

// var scope
var m = 25;
function add()
{
    var n = 45;
    console.log(m+n);
}
// console.log(n); // n not recognized
add();

// let scope - block scope
function subtract(a, b)
{
    
    if(a>b)
    {
        let sub = a-b;
        var sub1 = a-b;
    }
    else
    {
        let sub = b-a;
        var sub1 = b-a;
    }
    // return sub; // sub not recognized
    return sub1;
}
console.log(subtract(3,5));

// var can be hoisted but not const and let
console.log(age);
var age = 34;


// let and const
// console.log(age1);
// let age1 = 34; //not allowed
// const age1 = 45; // not allowed