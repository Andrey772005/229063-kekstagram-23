function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max || max < min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(20, 30));

const MAX_STRING_LENGTH = 140;
const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) =>
  someComment.length <= maxLength;
