function calculation(tax){
    function totalAmount(amt){
        return amt + tax;
    }
    return totalAmount;
}

var amount = calculation(10);

console.log(amount(5));
