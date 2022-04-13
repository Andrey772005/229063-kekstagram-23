<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
function checkStringLength (string, length) {
  return string.length <= length;
}

=======
>>>>>>> fbf9bbe18199e153bac6122eecc3868fda4c10f2
