function projectCreation(params){
let name  = params.shift() ;
let project = params.shift();
let time = project * 3;
console.log(`The architect ${name} will need ${time} hours to complete ${project} project/s.`);
}

projectCreation(['Dimitar', '4']);
