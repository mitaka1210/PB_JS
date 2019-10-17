function fishTank(params){


let length = params.shift();
let width = params.shift();
let height = params.shift();
let procent = params.shift()

let volume = length * width * height;
let allVolume = volume * 0.001;
let procentNeed = procent * 0.01;

let realLitters = allVolume * (1 - procentNeed );

console.log(`${realLitters.toFixed(3)}`);
}

fishTank (['85', '75','47','17']);
