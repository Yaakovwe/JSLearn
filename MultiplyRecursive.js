  function sum(arr, n) {
      if (n <= 0) {
          return arr[0];
      } else {
          return sum(arr, n - 1) + arr[n];
      }
  }

  function multiply(arr, n) {
      if (n <= 0) {
          return arr[0];
      } else {
          return multiply(arr, n - 1) * arr[n];
      }
  }

  console.log(sum([2, 3, 4], 1));
  console.log(sum([1], 0));
  console.log(multiply([2, 3, 4], 1));