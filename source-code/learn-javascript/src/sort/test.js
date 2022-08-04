const bubbleSort = (nums) => {
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

// console.log(bubbleSort([4, 5, 7, 2, 3, 1, 6]));

//532    32, 52, 53
// 5748322

const test = (num) => {
  let str = num + '';
  let result = [];
  for (let i = 0, len = str.length; i < len; i++) {
    result.push(Number(str.slice(0, i) + str.slice(i + 1)));
  }

  return Math.min(...result);
};

// console.log(test(5748322));

const insertionSort = (nums) => {
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

// console.log(insertionSort([4, 5, 7, 2, 3, 1, 6]));

const quickSort = (nums) => {
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

// console.log(quickSort([4, 5, 7, 2, 3, 1, 6]));

const selectionSort = (nums) => {
  for (let i = 0, len = nums.length; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }

  return nums;
};

// console.log(selectionSort([4, 5, 7, 2, 3, 1, 6]));

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

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  let middleIndex = Math.floor(nums.length / 2);
  let left = nums.slice(0, middleIndex);
  let right = nums.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
};

// console.log(mergeSort([4, 5, 7, 2, 3, 1, 6, 9]));

const bubbleSort2 = (nums) => {
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length - j; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }

  return nums;
};

// console.log(bubbleSort2([4, 5, 7, 2, 3, 1, 6, 9, 0]));

const heapSort = (nums) => {
  const createMaxHeap = (nums, len) => {
    const checkEachNode = (i) => {
      let maxIndex = i;
      let left = 2 * i;
      let right = 2 * i + 1;
      if (left < len && nums[left] > nums[maxIndex]) {
        maxIndex = left;
      }
      if (right < len && nums[right] > nums[maxIndex]) {
        maxIndex = right;
      }
      let temp = nums[maxIndex];
      nums[maxIndex] = nums[i];
      nums[i] = temp;
    };

    for (let i = Math.floor(len / 2); i >= 0; i--) {
      checkEachNode(i);
    }
  };

  for (let i = nums.length - 1; i >= 0; i--) {
    createMaxHeap(nums, i + 1);
    let temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
  }

  return nums;
};

console.log(heapSort([4, 5, 7, 2, 3, 1, 6, 9, 0, 8]));
