//import { parsePhoneNumberFromString } from 'libphonenumber-js'
const phone = require('libphonenumber-js')

function number(string) {
  const phoneNumber = phone.parsePhoneNumberFromString(string);
  const isValid = phoneNumber.formatInternational() === string;
  return {
    "isValid": isValid,
    "number": phoneNumber.number
  }
}

// pass invalid number
console.log(number('+1 213 373 423'));

// pass valid number
console.log(number('+1 213 373 4253'));