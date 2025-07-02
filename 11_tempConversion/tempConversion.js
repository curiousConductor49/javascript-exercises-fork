const convertToCelsius = function(degrees) {
  const celsiusVal = ((degrees - 32) * 5/9);
  if (celsiusVal === 0) {
    return parseInt(celsiusVal);
  } else {
    return parseFloat(celsiusVal.toFixed(1));
  }
  
};

const convertToFahrenheit = function(degrees) {
  const fahrenheitVal = (degrees * 9/5 + 32);
  if (fahrenheitVal === 0) {
    return parseInt(fahrenheitVal);
  } else {
    return parseFloat(fahrenheitVal.toFixed(1));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
