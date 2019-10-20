const isSimple = number => {
  let i = 2;

  for (i; i < number; i++) {
    if (!(number % i)) return false;
  }
  return true;
};

const getSimpleNumbers = number => {
  let i = 2;

  const numbers = [];

  for (i; i < number; i++) {
    if (isSimple(i)) {
      numbers.push(i);
    }
  }

  return numbers;
};

console.log(`-------------------------`);
console.log(`numbers`, getSimpleNumbers(100));
console.log(`-------------------------`);
