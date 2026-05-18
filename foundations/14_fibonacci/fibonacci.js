const fibonacci = function(n) {
    let count;
    if (typeof n !== 'number') {
        count = parseInt(countArg)
    } else {
        count = n
    }
    if (isNaN(count)) return "OOPS";    
    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    if (count == 1) return 1;
    
    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
