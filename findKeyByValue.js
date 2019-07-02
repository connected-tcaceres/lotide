const findKeyByValue = function(obj, value) {
  for (const genre in obj) {
    if(obj[genre] === value){
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;