module.exports = function check(str, bracketsConfig) {

  let brackets = [];
  
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {  
          if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
              if (brackets[brackets.length - 1] === str[i]) {
                  brackets.pop();
              } 
              else {
                brackets.push(str[i]);
                break;
              }
          }
          if (str[i] === bracketsConfig[j][0]) {
              brackets.push(str[i]);
          }
          if (str[i] === bracketsConfig[j][1]) {
              if (brackets[brackets.length - 1] === bracketsConfig[j][0]) {
                  brackets.pop();
              } 
              else return false;
          }
      }
  }
  return brackets.length === 0;
}
