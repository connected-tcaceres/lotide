const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(map(['yes','no'],word => word[0]),['y','n']);
// assertArraysEqual(map(['tyler','caceres'],word => word[3]),['e','e']);