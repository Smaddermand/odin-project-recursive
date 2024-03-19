// Script for Project Recursion



function fibs(number) {
    let array = [];
    let n = 0;
    let m = 1;


    for (let i = 0; i < number; i++) {
        array.push(n);
        n_temp = n;
        n = m;
        m = n_temp + m;
 
        
    }

    return array;
}


console.log(fibs(8));




function fibsRec(n, arr = [0, 1]) {
    // Base case: when the array's length is equal to n, return the array

    if (n <= 2) {
      return arr.slice(0, n);
    }
    if (arr.length < n) {
      // Add the sum of the last two elements to extend the array

      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

      return fibsRec(n, arr);
    }
    return arr;
  }

  console.log(fibsRec(8));