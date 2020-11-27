function getSquare(x)
{
    let sq = x*x;
    return sq;
}
let s = getSquare(5);
console.log(s);


// function expression
var func1 = getSquare;
console.log(func1(5));

// function expression : anonymous function
var func2 = function (y)
{
    let sq = y*y;
    return sq;
}
console.log(func2(6));
// function expression : non anonymous function
var func2 = function sq (y)
{
    let sq = y*y;
    return sq;
}
console.log(func2(6));

// Arrow function
var func3 = (number) => number * number;
(a, b) => {
    let sum = a+b;
    return sum;
}
// closure
function outside(x){
    function inside(y){
        return x+y;

    }
    return inside;
}

let inside_fn = outside(10);
let result = inside_fn(40);
console.log(result);
// example 2
function addSquares(a,b){
    function square(x){
        return x*x;
    }
    let sum = square(a)+square(b);
}

let r = addSquares(4,5);
console.log(r);

// example 3
let createPet = function (name){
    return {
        setName: function(newName) {
            name = newName;
        },
        getName: function() {
            return name;
        }
    }
}
let dog = createPet("Diamond");
// parameters
function formatName(name, address, salutation = 'MR.'){
    let completeName = salutation + "," + name + "," + address;
    return completeName;
}
let n = formatName( "Bikram", "KTM","Mr");
let n1 = formatName("Bikram","KTM");
console.log(n);
console.log(n1);

// rest parameter
function add(a,b,...moreArgs){
    console.log(a);
    console.log(b);
    console.log(moreArgs);
}
add(23,45);
add(2,3,4,5);
