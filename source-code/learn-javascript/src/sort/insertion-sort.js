export const insertionSort = (nums) => {
  for (let i = 1, len = nums.length; i < len; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      let temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
  }

  return nums;
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(insertionSort(nums));
