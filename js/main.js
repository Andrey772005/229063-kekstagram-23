function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(0, 100));


function maxStringLength(someComment, isValidMaxStringLength) {
  isValidMaxStringLength = 140;
  if ( isValidMaxStringLength.length > 140) {
    console.log('Комментарий слишком длинный');
    return true;
  } else {
    console.log('Введите ещё символы');
    return false;
  }
}

