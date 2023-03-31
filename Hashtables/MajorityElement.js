/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a > b ? 1 : -1);
    return nums[Math.floor(nums.length / 2)];
};
