export const selectionSort = (nums) => {
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }

  return nums;
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(selectionSort(nums));
