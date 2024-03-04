const sumAll = function(int1, int2) {
    if (typeof int1 !== "number" || typeof int2 !== "number" || int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    let total = 0;
    // Start from smallest number up to the biggest, no matter the order of arguments
    for (let i=((int1 > int2) ? int2 : int1);i<=((int1 > int2) ? int1 : int2);i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
