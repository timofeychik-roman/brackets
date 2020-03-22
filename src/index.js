module.exports = function check(str, bracketsConfig) {
  let open = "";
  let close = "";
  let same = "";
  for (let i = 0; i < bracketsConfig.length; i++){
    open += bracketsConfig[i][0];
    close += bracketsConfig[i][1];
    if (bracketsConfig[i][0] == bracketsConfig[i][1])
      same += bracketsConfig[i][0];
  } 

  let br = [];
  for (let i = 0; i < str.length; i++){
    if( same.indexOf(str[i]) != -1 ){
      if (br.length == 0)
        br.push(str[i]); 
      else {
        if (br[br.length - 1] == str[i])
          br.pop();
        else
          br.push(str[i]);
      }
    }
    else {
      if (open.indexOf(str[i]) != -1)
        br.push(str[i]);

      if (close.indexOf(str[i]) != -1){
        if (br.length == 0)
          return false;
        let index  = close.indexOf(str[i]);
        if (br[br.length - 1] != bracketsConfig[index][0])
          return false;
        else br.pop();
      }
    }
  }

  if (br.length == 0)
    return true;
  else return false;
}