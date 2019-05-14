
function taxCalculator(tax) {
    var taxPercentage = tax;
    return function (amount) {
        return amount * tax / 100
    }
}

var calculator = taxCalculator(10);
console.log(calculator(90));