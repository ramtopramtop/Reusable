'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Миша': '+88005553535',
  'Гриша': '+88005553536'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
