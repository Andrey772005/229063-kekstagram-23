const MAX_STRING_LENGTH = 140;

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min <= Math.random()) {
    console.log('Введено неверное число');
  } else {
  console.log('Число в нужном диапазоне');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber(1, 3);


const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) =>
  someComment.length > maxLength;

const string = 'Some too long comment';
console.log(isValidMaxStringLength(string));




