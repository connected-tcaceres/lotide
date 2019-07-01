const flatten = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
};

module.exports = flatten;


// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);// => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([1, 2, [3, 4], "5", [6]]),[1,2,3,4,"5",6]);
// assertArraysEqual(flatten([[1, 2], [3, 4], 5, [6]]),[1,2,3,4,5,6]);
// assertArraysEqual(flatten(["1", "2", [3, 4], 5, ["6"]]),["1","2",3,4,5,"6"]);