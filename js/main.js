function randomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

 const MAX_STRING_LENGTH = 140;
 const isValidMaxStringLength = (someComment, maxLength = MAX_STRING_LENGTH) => someComment.length <= maxLength;
