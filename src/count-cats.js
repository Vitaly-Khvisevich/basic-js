//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let number=0;
matrix=(matrix.toString());
matrix=matrix.split(",");
for (i=0; i<matrix.length; i++){
  if(matrix[i]=="^^"){
    number+=1;
  }
}
return(number);
};
