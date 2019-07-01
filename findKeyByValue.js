const findKeyByValue = function(obj, value) {
  for (const genre in obj) {
    if(obj[genre] === value){
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);