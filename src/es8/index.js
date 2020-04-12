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

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello world!'), 3000)
      : reject(new Error('Test error...'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (err) {
    console.error(err.message);
  }
};

anotherFunction();
