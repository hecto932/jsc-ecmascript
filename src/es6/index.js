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

// Multiline before es6

let lorem = 'phrase 1 \n' + 'phrase 2';

// Multiline es6
let lorem2 = `phrase 1
phrase2`;

console.log(lorem);
console.log(lorem2);

// Destructuring before es6
let person = {
  name: 'hector',
  age: 28,
  country: 'VEN',
};

console.log(person.name, person.age, person.country);

// Destructuring es6

let { name, age, country } = person;
console.log(name, age, country);

// spread operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// LET

{
  let globalLet = 'Global LET';
  console.log(globalLet);
}

// VAR
{
  var globalVar = 'Global VAR';
}
console.log(globalVar);

// CONST

const a = 'b';
// a = 'a';
console.log(a);

// Object params before es6

name = 'Hector';
age = 28;

const obj = { name: name, age: age };
console.log(obj);

const obj2 = { name, age };
console.log(obj2);

// ARROW FUNCTIONS

let names = [
  { name: 'Hector', age: 28 },
  { name: 'Victoria', age: 26 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

let listOfNames3 = (name, age, country) => {
  // ...
};

let listOfNames4 = (person) => {
  // ...
};

let square = (num) => num * num;

// PROMISES

let helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Upps!');
    }
  });
};

helloPromise()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
