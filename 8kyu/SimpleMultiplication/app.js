/* 8 Kyu - Simple Multiplication */
/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}


// Run Tests
console.log(simpleMultiplication(2), 16);
console.log(simpleMultiplication(3), 27 )