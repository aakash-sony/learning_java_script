let arr = [2, 4, 30, 8, 70, 80]
const result = arr.filter(checkDivisibleBy10);
console.log(result);
function checkDivisibleBy10(x) {
    return x % 10 == 0;
}