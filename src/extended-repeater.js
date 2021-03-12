//const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
options.addition = String(options.addition) !== 'undefined' ? String(options.addition) : ''
options.separator = options.separator ? options.separator : '+'
options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
let new_str='', part_str='';

if (options.additionRepeatTimes){
  for(i=0; i<options.additionRepeatTimes; i++){
    if (i==options.additionRepeatTimes-1){
      part_str+= options.addition
    }
    else{
      part_str+= options.addition + options.additionSeparator;
    }   
  }
}
else{ 
part_str+=options.addition;
}  
  
if (options.repeatTimes){
  for(j=0; j<options.repeatTimes; j++){
    if (j==options.repeatTimes-1){
   new_str+=str+part_str;
    }
    else{
      new_str+=str+part_str+options.separator;
    }
  }
return new_str;
}
else{
 return str + part_str;
}
};
  
