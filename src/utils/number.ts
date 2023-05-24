export const genRandom = (min = 1, max = 99999) =>
  Math.floor(Math.random() * (max - min)) + min;
