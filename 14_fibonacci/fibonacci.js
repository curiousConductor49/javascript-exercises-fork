const fibonacci = function(num) {
    const position = parseInt(num);
    const fibonacciArr = [1, 1];

    if (position < 0) {
        return "OOPS";
    } else {
        switch (position) {
            case 0:
                return 0;
            case 1:
                return fibonacciArr[0];
            default:
                for (let i = 2; i < num; i++) {
                    fibonacciArr.push(fibonacciArr[i-2] + fibonacciArr[i-1]);
                }
                return fibonacciArr[fibonacciArr.length - 1];
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
