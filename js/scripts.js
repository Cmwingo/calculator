var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1 , number2) {
  return number1 - number2;
};

var multiply = function(number1 , number2) {
  return number1 * number2;
};

var divide = function(number1 , number2) {
  return number1 / number2;
};

var remainder = function(number1 , number2) {
  return number1 % number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));


var result = remainder(number1, number2);
alert(result);
