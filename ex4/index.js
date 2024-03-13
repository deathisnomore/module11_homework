function recalculateNumbers(a, b) {
    let num1 = a;
    let interval = setInterval(function() {
        console.log(num1);
        if (num1 === b) {
            clearInterval(interval);
        }
        num1++;
    }, 1000);
}
recalculateNumbers(5, 15);