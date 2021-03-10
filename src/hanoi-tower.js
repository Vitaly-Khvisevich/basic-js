//const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let turns, seconds;
  let answer={};
  turns =(2 ** disksNumber) - 1;
  seconds = Math.floor(turns/(turnsSpeed/3600));
  answer['turns']=turns;
  answer['seconds']=seconds;
  
  return answer;
};
