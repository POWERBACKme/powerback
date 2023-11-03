export const shuffle = (array) => {
  let length = array.length,
    randomness;
  while (length !== 0) {
    randomness = Math.floor(Math.random() * length);
    length--;
    [array[length], array[randomness]] = [
      array[randomness],
      array[length],
    ];
  }
  return array;
};
