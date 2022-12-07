function twoSum(arr, tar) {
  const newarr = [];
  let i, j;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar) {
        newarr.push(i, j);
      }
    }
  }
  return newarr;
}

console.log(twoSum([3, 3], 6));
