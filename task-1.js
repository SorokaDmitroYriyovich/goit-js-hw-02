'use strict';

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    
    const message = customerCredits >= totalPrice ? `You ordered ${quantity} droids worth ${totalPrice} credits!` : `"Insufficient funds!"`;
    return message;
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(10, 500, 5000));