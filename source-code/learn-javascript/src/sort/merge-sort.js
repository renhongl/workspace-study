const merge = (left, right) => {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};

export const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  let midIndex = Math.floor(nums.length / 2);
  let left = nums.slice(0, midIndex);
  let right = nums.slice(midIndex);

  return merge(mergeSort(left), mergeSort(right));
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(mergeSort(nums));
