//堆排序使用的创建顶堆
// const createMaxHeap = (arr, len) => {
//   const create = (arr, i, len) => {
//     console.log(arr);
//     let maxIndex = i;
//     let left = 2 * i;
//     let right = 2 * i + 1;
//     if (left < len && arr[maxIndex] < arr[left]) {
//       maxIndex = left;
//     }
//     if (right < len && arr[maxIndex] < arr[right]) {
//       maxIndex = right;
//     }
//     let temp = arr[maxIndex];
//     arr[maxIndex] = arr[i];
//     arr[i] = temp;
//     console.log(arr);
//   };
//   for (let i = Math.floor(len / 2); i >= 0; i--) {
//     create(arr, i, len);
//   }
// };

/**
 * 堆排序
 * 循环创建最小堆，依次取出堆顶元素
 */
// const heapSort = (arr) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     createMaxHeap(arr, i + 1);
//     let max = arr[0];
//     arr[0] = arr[i];
//     arr[i] = max;
//   }
//   return arr;
// };

// const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
// console.log(heapSort(nums));

const createMaxHeap = (nums, len) => {
  const switchMinTree = (i) => {
    let maxIndex = i;
    if (2 * i < len && nums[maxIndex] < nums[2 * i]) {
      maxIndex = 2 * i;
    }
    if (2 * i + 1 < len && nums[maxIndex] < nums[2 * i + 1]) {
      maxIndex = 2 * i + 1;
    }
    let temp = nums[i];
    nums[i] = nums[maxIndex];
    nums[maxIndex] = temp;
  };

  for (let i = Math.floor(len / 2); i >= 0; i--) {
    switchMinTree(i);
  }
};

export const heapSort = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    createMaxHeap(nums, i + 1);
    let max = nums[0];
    nums[0] = nums[i];
    nums[i] = max;
  }
  return nums;
};

const nums = [6, 2, 4, 8, 5, 3, 1, 9, 7];
console.log(heapSort(nums));
