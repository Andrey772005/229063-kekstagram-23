function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(0, 100));


function maxStringLength(someComment, maxlength: 140) {
  if (maxlength.length > 14) {  //???????????
    return true;
    //console.log('Комментарий слишком длинный');
  } else {
    return false;
    //console.log('Введите ещё символы'); // Не знаю какой результат выдать в консоль, поэтому решил так)
  }
}

