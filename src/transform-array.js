//const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
if (Array.isArray(arr)){
  y=arr.reduce(function(answ, item, index){
    if(arr[index]=='--discard-prev'||arr[index]=='--discard-next'||arr[index]=='--double-next'||arr[index]=='--double-prev'){
      return answ;
    }
    if (arr[index - 1] == '--discard-next') {
      return answ;
    }
    if (arr[index - 1] == '--double-next') {
      answ.push(item);
    }
    answ.push(item);
    if (arr[index + 1] == '--double-prev'){
      answ.push(item); 
    }
    if (arr[index + 1] == '--discard-prev') {
     answ.splice(answ.length - 1, 1);
    }
   return answ;
  },[]);
  return(y);
  }
else{
  throw new Error('not an Array!');
}
};
