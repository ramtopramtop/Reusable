'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Миша', phone: '+88005553535' },
  { name: 'Гриша', phone: '+88005553536' }
];

const findPhoneByName = (name) => {
  for (const rec of phonebook) {
    if (name === rec.name) return rec.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
