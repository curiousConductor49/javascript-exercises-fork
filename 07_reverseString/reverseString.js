const reverseString = function(string) {
    const strIntoArr = string.split("");
    strIntoArr.reverse();
    const splitStr = strIntoArr.join("");
    return splitStr;
};

// Do not edit below this line
module.exports = reverseString;
