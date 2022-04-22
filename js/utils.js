// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${  min  } до ${  max }`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// eslint-disable-next-line no-unused-vars
function checkStringLength (string, length) {
  return string.length <= length;
}

export {getRandomPositiveInteger, uniqueRandomNumberGenerator, checkStringLength};

