const countLetters = function(msg) {
  const letterCount = {};
  msg = msg.split(" ").join("").split("");
  for (const letter of msg) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;

//TEST CODE
console.log(countLetters("hello"));
console.log(countLetters("bye bye"));
console.log(countLetters("abcde fghij"));