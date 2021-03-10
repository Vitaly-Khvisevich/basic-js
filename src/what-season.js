module.exports = function getSeason(date) {
let month;
if(!date) {
    return "Unable to determine the time of year!";
  }
 try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }
month = date.getMonth() + 1 ;
     if (month === 12 || month === 1 || month === 2) {
     return "winter";
     }
      else if (month >= 3 && month < 6) {
      return "spring";
    }
     else if (month >= 6 && month < 9) {
      return "summer";
    }
     else if (month >= 9 && month < 12) {
      return "autumn";
    } 
};
