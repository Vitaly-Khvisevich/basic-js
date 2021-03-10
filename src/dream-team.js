//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let arr=[];
    let name='';
    if (Array.isArray(members)==false){
        return false;
      }
      else{
      for(i=0; i<members.length; i++){
        if (typeof(members[i])=='string'){
          members[i]=(members[i].trim());
          arr.push(members[i][0].toUpperCase())
          
        }
        
      }
      arr.sort();
      name=(arr.join(''));
      return name;
      }
};
