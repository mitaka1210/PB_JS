function hello(params){
let  inch = params.shift();
var change = inch * 2.54;


console.log(`${change}`);
}

hello (['5']);
