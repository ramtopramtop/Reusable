'use strict';

const square = (a) => a * a;

const cube = (a) => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const Arr = [];
  for (let i = 0; i < 10; i++) {
    Arr.push(average(square(i), cube(i)));
  }
  return Arr;
};

module.exports = { square, cube, average, calculate };
