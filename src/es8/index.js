// Object.entries(data)

const data = {
  frontend: 'Hector',
  backend: 'Victoria',
  design: 'Leslie',
};

const entries = Object.entries(data);
console.log(entries);

// Object.values

const values = Object.values(data);
console.log(values);

// String.padStart and String.padEnd

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(8, ' --------'));
console.log('food'.padEnd(12, ' -------'));

// TRAILING COMMAS
const data2 = {
  frontend: 'Hector',
  backend: 'Victoria',
  design: 'Leslie',
};

console.log(data2);
