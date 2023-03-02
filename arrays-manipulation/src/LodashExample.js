
//import the lodash module
const lodash = require('lodash');

//Create a function to find a maximum value from number array.

function findMaxValue(numbers) {
  return lodash.max(numbers);
}

//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(arr, threshold) {
  return lodash.filter(arr, val => val > threshold);
}

//Create a function to return all values of employeeName array in capital letters.

function nameInCapital(names) {
  return lodash.map(names, name => lodash.toUpper(name));
}


module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
