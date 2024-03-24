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




    function merge(A, B) {
        let i = 0;
        let j = 0;
        let k = 0;
        let C = [];
        let m = A.length;
        let n = B.length;
    
        while ( i < m && j < n) {
    
            if (A[i] < B[j]) {
                C[k] = A [i];

                i++;
            } else {
                C[k] = B[j];

                j++;
            }
            k++
        }
    
        for ( ; i <= m; i++){
            C[k] = A[i];
            k++;
        }
        for ( ; j <= n; j++) {
            C[k] = B[j];
            k++;
        }
    
        return C;
    }
    


function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    } else {
        //find mid
        let mid = arr.length / 2;
        
        // sort left half
        let A = mergeSort(arr.slice(0, mid));

        // sort right half
        let B = mergeSort(arr.slice(mid));


        let i = 0;
        let j = 0;
        let k = 0;
        let C = [];
        let m = A.length;
        let n = B.length;
    
        while ( i < m && j < n) {
    
            if (A[i] < B[j]) {
                C[k] = A [i];

                i++;
            } else {
                C[k] = B[j];

                j++;
            }
            k++
        }
    
        for ( ; i < m; i++){
            C[k] = A[i];
            k++;
        }
        for ( ; j < n; j++) {
            C[k] = B[j];
            k++;
        }
    
        return C;
        

    }
}




const A = [1, 3, 5, 7];
const B = [2, 4, 6, 8];


console.log("hello " + merge(A, B));

const arr = [5, 3, 2, 4, 6, 1, 8, 7, 9, 14];

console.log(mergeSort(arr));
