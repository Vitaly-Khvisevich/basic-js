//const CustomError = require("../extensions/custom-error");

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  constructor(direct = 1) {
    this.direct = direct;
  };
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('ERROR!');
    let arr = [];
    let iterator = -1;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
        iterator++;
        let index = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[iterator % key.length].toUpperCase())) % alphabet.length;
        arr.push(alphabet[index]);
      } else {
        arr.push(message[i]);
      };
    };
    if (this.direct) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    };
  };

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('ERROR!');
    let arr = [];
    let iterator = -1;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
        iterator++;
        let index = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.length - alphabet.indexOf(key[iterator % key.length].toUpperCase())) % alphabet.length;
        arr.push(alphabet[index]);
      } else {
      arr.push(message[i]);
      };
    };
    if (this.direct) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    };
  };
};

module.exports = VigenereCipheringMachine;
