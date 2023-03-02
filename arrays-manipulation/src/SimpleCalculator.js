


//Create function addNumbers which will take two parameters add the numbers 
//and return the result
function addNumbers(num1, num2) {
  return num1 + num2;
}

//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
function subNumbers(num1, num2) {
  return num1 - num2;
}

//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
function mulNumbers(num1, num2) {
  return num1 * num2;
}

//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
function divNumbers(num1, num2) {
  if(num2 === 0){
    return "Please provide valid numbers..!"
  }
  return num1 / num2;
}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}