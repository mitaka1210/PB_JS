function fishTank(params){
let landscaped = params.shift();
let priceForlandscaped = landscaped * 7.61;
let discount = priceForlandscaped * 0.18;
let total = priceForlandscaped - discount;
console.log(`The final price is: ${total.toFixed(2)} lv.`);
console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

fishTank (['540']);
