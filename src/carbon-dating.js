//const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) !== 'string') || sampleActivity==="") {
    return false;
  }
  else{
    let sampleActivityCount = parseInt(sampleActivity);
    if (isNaN(sampleActivityCount)||sampleActivityCount<=0){
     return false; 
    }
    else{
    const k = 0.69314718056/HALF_LIFE_PERIOD;
    t=((Math.log(MODERN_ACTIVITY/Number(sampleActivity)))/k);
    if (t<0){
      return(false);
    }
    else{
      return Math.ceil(t);
  }
    }
  }
};
