/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var solution = [];
    nums.forEach((num, index) => {
        if(num in map)
            solution.push(index, map[num]);
        else
            map[target - num] = index;
    });
    return solution;
};
