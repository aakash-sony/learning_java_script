let a, fact = 1;
function factorial(a) {
    for (let i = 1; i <= a; i++) {
        fact = fact * i;
    }
    return fact;
}
let d = factorial(5);
console.log(d);
