const repeatString = function(string, repeatNum) {
    let repeatedString = string;
    if (repeatNum !== 0 && repeatNum > 0) {
        for (let i = 0; i < repeatNum - 1; i++) {
            repeatedString += string;
        }
    } else if (repeatNum < 0) {
        repeatedString = "ERROR";
    } else {
        repeatedString = "";
    }
    
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
