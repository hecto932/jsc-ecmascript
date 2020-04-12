// Default Params BEFORE ES6

function newFunction(name, age, country) {
  var name = name || 'Hector';
  var age = age || 28;
  var country = country || 'VEN';

  console.log(name, age, country);
}

// Default Params  ES6

function newFunction2(name = 'Hector', age = 28, country = 'VEN') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Carmen', 23, 'MX');

// Template literal before es6

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Template Literal es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
