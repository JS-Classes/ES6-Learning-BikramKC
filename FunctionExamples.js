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
