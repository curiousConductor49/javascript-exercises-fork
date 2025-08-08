const palindromes = function (str) {
    const arr = str.split("");
                
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "!" || arr[i] === "." || arr[i] === ",") {
            arr.splice(i, 1);
        }
    }

    const cleanArr = arr.filter((el) => el !== " ");

    let word = cleanArr.join("").toLowerCase();
    let wordReverse = [...word].reverse().join("");

    if (word === wordReverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
