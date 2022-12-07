const searchInsert = (arr, tar) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar || arr[i] > tar) {
      return i;
    } else if (arr[i] === arr[arr.length - 1]) {
      return arr.length;
    }
  }
};

//display the output
console.log(searchInsert([1, 3, 5, 6], 7));
