function checkPrimeNumber(num) {
    if (num <= 1 || num > 1000) {
        return "Данные неверны";
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return "Число НЕ является простым";
            }
        }
        return "Число является простым";
    }
}
let number = 1; //Можно заменить любым другим для проверки
let result = checkPrimeNumber(number);
console.log(result);