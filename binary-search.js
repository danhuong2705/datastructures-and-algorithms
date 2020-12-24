var findMin = function (nums) {
  if (nums.length <= 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  debugger;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] < nums[middle - 1]) return nums[middle];
    if (nums[middle] > nums[middle + 1]) return nums[middle + 1];
    if (nums[middle] > nums[0]) left = middle + 1;
    if (nums[middle] < nums[0]) right = middle - 1;
  }
  return -1;
};
let nums = [11, 12, 13, 14];

console.log(findMin(nums));
