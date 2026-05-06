const convertToCelsius = function(temp) {
  let ans = Math.round( (temp - 32) * (5/9) * 10 ) / 10;
  return ans;
};

const convertToFahrenheit = function(temp) {
  let ans = Math.round( ( (9/5) * temp + 32 ) * 10 ) / 10;
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
