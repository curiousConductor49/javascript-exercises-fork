const sumAll = function(firstInt, secondInt) {
    let finalSum = 0;

    if (firstInt < 0 || secondInt < 0) {
        return "ERROR";
    } else if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
        return "ERROR";
    } 

    const startVal = firstInt < secondInt ? firstInt : secondInt;
    const endVal = startVal === firstInt ? secondInt : firstInt;
    
    for (let i = startVal; i <= endVal; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
