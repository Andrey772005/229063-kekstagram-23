// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const randomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

randomInt(1, 15);

const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = _.random(min, max);

    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = _.random(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// eslint-disable-next-line no-unused-vars
const randomArray = (array) => array[randomInt(0, array.length - 1)];

const getUniqueNumber = uniqueRandomNumberGenerator(1, 25);

// eslint-disable-next-line no-unused-vars
function checkStringLength(string, length) {
  return string.length <= length;
}

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Debounce
const INTERVAL = 500;

const debounce = (callback) => {
  let timeout = null;

  return (...args) => {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      callback(...args);
    }, INTERVAL);
  };
};

export {getRandomPositiveInteger, getUniqueNumber, isEscEvent, debounce};

