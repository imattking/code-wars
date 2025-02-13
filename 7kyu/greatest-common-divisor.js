/* 7 Kyu - Greatest Common Divisor */
/* 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

// Solution w/out recursion - will time out processing larger numbers if you don't remove smallest integers
function mygcd(x, y){
    let min = Math.min(x, y);
    let arr = [];
    for (let i = min; i >= 1; i--) {
        if (x % i === 0 && y % i === 0) {
            arr.push(i)
        }
    }
    return Math.max(...arr);
}

// Run Tests
console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);
console.log(mygcd(27, 135), 27);
console.log(mygcd(147503391, 5254914));
