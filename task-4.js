'use strict';

function getShippingCost(country) {
    const priceDeliveryChina = 100;
    const priceDeliveryChile = 250;
    const priceDeliveryAustralia = 170;
    const priceDeliveryJamaica = 120;
    switch (country) {
        case "China":
            return `Shipping to ${country} will cost ${priceDeliveryChina} credits`;
            break;
        case "Chile":
            return `Shipping to ${country} will cost ${priceDeliveryChile} credits`;
            break;
        case "Australia":
            return `Shipping to ${country} will cost ${priceDeliveryAustralia} credits`;
            break;
        case "Jamaica":
            return `Shipping to ${country} will cost ${priceDeliveryJamaica} credits`;
            break;
        default:
            return ("Sorry, there is no delivery to your country")
            break;
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"