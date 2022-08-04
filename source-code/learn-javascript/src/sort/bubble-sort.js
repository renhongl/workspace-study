export const bubbleSort = (nums) => {
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(bubbleSort(nums));
