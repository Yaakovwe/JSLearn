  function sum(arr, n) {
      if (n <= 0) {
          return arr[0];
      } else {
          return sum(arr, n - 1) + arr[n];
      }
  }

  console.log(sum([2, 3, 4], 1));
  console.log(sum([1, 2], 0));

  //freeCodecamp