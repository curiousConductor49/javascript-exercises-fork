const removeFromArray = function(arr, ...args) {
    const cleanArr = arr.filter((el) => {
        if (!args.includes(el)) {
            return el;
        }
    })

    return cleanArr;
};

// Do not edit below this line
module.exports = removeFromArray;
