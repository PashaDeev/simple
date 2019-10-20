const isSimple = () => {
  const memo = {};
  const simple = [2];

  return number => {
    if (memo[number] !== undefined) return memo[number];

    for (const simpleNumber of simple) {
      console.count("here");
      if (!(number % simpleNumber)) {
        memo[number] = false;
        return false;
      }
    }
    simple.push(number);
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
console.log(`-------------------------`);
