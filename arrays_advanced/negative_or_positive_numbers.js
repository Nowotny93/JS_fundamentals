function negativePositiveNumbers(arr) {
  let result = [];
  for (let num of arr){
      if (num < 0){
        result.unshift(num); // Insert at the start
      } else {
        result.push(num);    // Append at the end
      }
  }
  for (let num1 of result){
      console.log(num1)
  }
}

negativePositiveNumbers([3, -2, 0, -1])