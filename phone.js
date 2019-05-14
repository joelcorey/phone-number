//import { parsePhoneNumberFromString } from 'libphonenumber-js'
const phone = require('libphonenumber-js')

// Write a function that accepts a user input phone number as a string and returns a normalized United States phone number 
// in E.164 format. Return null (or an equivalent value) if the user input is invalid.
//
// Use your preferred general purpose programming language.
//
// Write a readme.txt file that describes the code's functionality and why you decided on your solution.
//
// There is no time limit. Out of respect for your time, you can document the remainder of your solution if this problem 
// takes more than 1 hour.
//
// Document any online resources, third party libraries, and assumptions made when coding your solution.

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