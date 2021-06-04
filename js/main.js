
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min <= 0 && max >= 100) {
    console.log('Введено неверное число');
  } 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
randomNumber(1, 3);

const MAX_STRING_LENGTH = 140;
function isValidMaxStringLength(someComment, maxLength = MAX_STRING_LENGTH) {
  if (someComment.length > maxLength) {
  return true;
  } else {
  return false;
  }
};

//const string = 'Some too long comment';
//console.log(isValidMaxStringLength(string));




