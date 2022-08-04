export const shellSort = (nums) => {
  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < nums.length; i++) {
      let j = i;
      while (j - gap >= 0 && nums[j] < nums[j - gap]) {
        let temp = nums[j];
        nums[j] = nums[j - gap];
        nums[j - gap] = temp;
        j -= gap;
      }
    }
  }
  return nums;
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(shellSort(nums));
