const takeUntil = function(array, callback) {
  let result = [];
  for(const arrValue of array){
    if(callback(arrValue)){
      return result;
    }
    result.push(arrValue);
  }
  return result;
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','),['I\'ve', 'been', 'to', 'Hollywood']);
