function ascendingOrder(arr) {
  let grtNum;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        grtNum = arr[i];
        arr[i] = arr[j];
        arr[j] = grtNum;
      }
    }
  }
  return arr;
}

console.log(ascendingOrder([2, 5, 6, 9, 10, 77, 45, 23]));
