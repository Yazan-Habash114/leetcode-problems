/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => {
  for (let i = 0; i < nums.length; i++)
    nums[i] === nums[i + 1] && nums.splice(i--, 1);
  return nums.length;
};
