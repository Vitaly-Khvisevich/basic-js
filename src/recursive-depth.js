//const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let x = 0;
    let y = 1;

    arr.forEach( (item) => {
      if (Array.isArray(item)) {
        y = this.calculateDepth(item);
        if (x < y) x = y;
      }
    });
    return ++x;
  }
};
