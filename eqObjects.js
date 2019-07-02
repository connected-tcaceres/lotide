const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keysObj1 = Object.keys(object1).sort();
  let keysObj2 = Object.keys(object2).sort();

  if(keysObj1.length !== keysObj2.length) return false;
    
  for(const key of keysObj1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if(!eqArrays(object1[key],object2[key])){
          return false;
        }
      }
      if(typeof object1[key] === 'object' && typeof object2[key] === 'object'){
        return eqObjects(object1[key],object2[key]);
      }

      if(object1[key] !== object2[key]){
        return false;
      }
    }
  return true;
};

module.exports = eqObjects;