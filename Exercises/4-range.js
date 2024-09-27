'use strict';

const range = (start, end) => {
  if (end < start) return [];
  const Arr = Array(end - start + 1);
  for (let i = 0; i <= end - start; i++) {
    Arr[i] = start + i;
  }
  return Arr;
};
module.exports = { range };
