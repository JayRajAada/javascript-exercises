const removeFromArray = function(arr , k) {
    const ans = arr.filter((num) => (num != k));
    return ans;
};
// Do not edit below this line
module.exports = removeFromArray;
