var searchRange = function (nums, target) {
  let targetFirstOccurence = nums.indexOf(target);

  if (targetFirstOccurence === -1) return [-1, -1];

  for (let i = targetFirstOccurence; i < nums.length; i++) {
    if (nums[i] > target) {
      return [targetFirstOccurence, i - 1];
    }
  }

  return [targetFirstOccurence, nums.length - 1];
};
