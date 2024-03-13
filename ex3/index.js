function getNum(a) {
    return function(b) {
        return a + b;
    };
}

let num1 = 1;
let num2 = 2;
// Можно использовать любые другие числа для проверки

let add = getNum(num1);
let result = add(num2);

console.log(result);