const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Come on man u 4 real?');
  }
  return a / b;
}


function multiply(a, b){
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
