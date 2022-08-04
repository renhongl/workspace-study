export const quickSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  let mid = nums[0];
  let left = [];
  let right = [];

  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] < mid) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), mid, ...quickSort(right)];
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(quickSort(nums));
