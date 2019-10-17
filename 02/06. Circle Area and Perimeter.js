function cirlcePerimeter(params){
let radius = params.shift();
let circleAre = Math.pow(radius, 2) * Math.PI;
let circlePerimeter = 2 * Math.PI * radius;
console.log(`${circleAre.toFixed(2)}`);
console.log(`${circlePerimeter.toFixed(2)}`);
}

cirlcePerimeter (['3']);
