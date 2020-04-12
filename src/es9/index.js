// Rest operator

const obj = {
  name: 'Hector',
  age: 28,
  country: 'VEN',
};

let { country, ...all } = obj;

console.log(country, all);

// spread operator

const obj1 = {
  ...obj,
  country: 'VEN',
};

console.log(obj1);

// Promise.finally we can know when it finishes

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve('helloWorld') : reject(newError('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finishes'));
