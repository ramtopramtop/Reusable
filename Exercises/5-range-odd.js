'use strict';

const rangeOdd = (start, end) => {
  if (end < start) return [];
  const Arr = Array(end - start + 1);
  if (Math.trunk(start / 2) * 2 == start) { let i = 0 }
  else { let i = 1; }
  //console.log(start);
  //console.log(end);
  //console.log(Arr);
  for (let i = 0; i <= end - start; i=i+2) {
    //  console.log(i);
    Arr[i] = start + i;
  }
  return Arr;
};

module.exports = { rangeOdd };
