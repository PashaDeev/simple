const isSimple = () => {
  const memo = {};

  return number => {
    if (memo[number] !== undefined) return memo[number];

    let i = 2;

    for (i; i < number; i++) {
      console.count("here");
      if (!(number % i)) {
        memo[number] = false;
        return false;
      }
    }
    memo[number] = true;
    return true;
  };
};

const check = isSimple();

const getSimpleNumbers = number => {
  let i = 2;

  const numbers = [];

  for (i; i < number; i++) {
    if (check(i)) {
      numbers.push(i);
    }
  }

  return numbers;
};

console.log(`-------------------------`);
console.log(`numbers`, getSimpleNumbers(100));
console.log(`numbers`, getSimpleNumbers(100));
console.log(`-------------------------`);
