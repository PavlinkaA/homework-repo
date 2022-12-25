function sumofNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    let numbers = numArray[i];
    sum += numbers;
  }
  return sum;
}

console.log(sumofNumbers([5, 10, 10, 10, 5]));