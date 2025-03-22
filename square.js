unction sumOfSquareNumbers(k) {
    for (let a = 0; a * a <= k; a++) {
        for (let b = 0; b * b <= k; b++) {
            if (a * a + b * b === k) {
                return true;
            }
        }
    }
    return false;
}
console.log(sumOfSquareNumbers(25));
console.log(sumOfSquareNumbers(7)); 
