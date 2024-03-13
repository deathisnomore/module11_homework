const array = [1, 2, "string", null, undefined, 3, 4, 0]
function getEvenOddZeroNums(arr) {
    let evenNums = 0;
    let oddNums = 0;
    let zeroNums = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zeroNums++;
            } else if (arr[i] % 2 === 0) {
                evenNums++;
            } else {
                oddNums++;
            }
        }
    }
    console.log("Чётных элементов: " + evenNums);
    console.log("Нечетных элементов: " + oddNums);
    console.log("Нулей: " + zeroNums);
}
getEvenOddZeroNums(array);