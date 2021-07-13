
export function randomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

export const MAX_STRING_LENGTH = 140;
export const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) => someComment.length <= maxLength;


export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const temp = array[i];
    const randomIndex  = randomNumber(0, array.length - 1);
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};


export const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = randomNumber(min, max);

    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${  min  } до ${  max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
