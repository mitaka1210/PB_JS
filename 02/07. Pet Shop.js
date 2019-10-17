function fishTank(params){
let dog = params.shift();
let other = params.shift();
let priceForDog = dog * 2.50;
let priceForOther = other * 4;
let summ = priceForDog + priceForOther;
console.log(`${summ.toFixed(2)} lv.`);

}

fishTank (['5', '4']);
