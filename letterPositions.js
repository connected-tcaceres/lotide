const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("").split("");
  
  for (let i =0;i<sentence.length;i++) {
    if(!results[sentence[i]]){
      //create as array
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i); 
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e,[1]);