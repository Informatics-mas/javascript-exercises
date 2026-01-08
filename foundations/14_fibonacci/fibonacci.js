const fibonacci = function(number){
let num = Number(number);
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else if (num > 1) {
    let F = fibonacci(num - 1) + fibonacci(num - 2);
    return F;
  }
};

// Do not edit below this line
module.exports = fibonacci;
