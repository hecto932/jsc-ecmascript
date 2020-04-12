// Array.flat

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// Array.flatMap

array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

// trim

let hello = '               hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello world            ';
console.log(hello);
console.log(hello.trimEnd());

// Optional catch biding

try {
} catch {
  // It doesn't neccesary
  // error
}

let entries = [
  ['name', 'oscar'],
  ['age', 32],
];

console.log(Object.fromEntries(entries));

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
