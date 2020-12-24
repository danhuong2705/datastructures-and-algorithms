function quick_sort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivot = arr.pop();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }
  return [...quick_sort(left), pivot, ...quick_sort(right)];
}

console.log(quick_sort([3, 0, 2, 5, -1, 4, 1]));
