'use strict';

const fn = () => {
  const newObject = { name: 'Маша', };
  let anotherObject = { name: 'Оля', };
  newObject.name = 'Вася';
  anotherObject.name = 'Петя';
  const oneMoreObject = { name: 'Полкан', };
  anotherObject = oneMoreObject;  
};

module.exports = { fn };
