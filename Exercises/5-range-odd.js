'use strict';

const rangeOdd = (start, end) => {
  let i=start;
  if (2*Math.trunc(start/2) == start) { i = start+1 }
  if (end < i) return [];
  const Arr = [];
  for (i; i <= end; i = i + 2) {
    Arr.push(i);
  }
  return Arr;
};
console.log(rangeOdd(0,0));
module.exports = { rangeOdd };
