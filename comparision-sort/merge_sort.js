const mergeUnSorted = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
       arr.push(left.shift()); 
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr,...left,...right];
};
const mergeSort = (arr) => {
  let tempArr = [...arr];
  if (tempArr.length <= 1) return tempArr;
  let middle = Math.floor(tempArr.length / 2);
  let right = tempArr;
  let left = tempArr.splice(0, middle);

  return mergeUnSorted(mergeSort(left), mergeSort(right));
};
console.log(mergeSort([10, 4, 1, 5, 6]));
