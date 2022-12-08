const { workerData, parentPort} = require("worker_threads"); 

function merge(left, right) {

   let ans = []

   while (left.length && right.length) {

      if (left[0] < right[0]) {
         ans.push(left.shift())
      } else {
         ans.push(right.shift())
      }
   }

   return [ ...ans, ...left, ...right ]
 }

function merge_sort(arr) {

   const middle_index = arr.length / 2

   if(arr.length < 2) {
       return arr
   }

   const left_arr = arr.splice(0, middle_index)

   return merge(merge_sort(left_arr),merge_sort(arr))
}

let ans = merge_sort(workerData.arr);


 parentPort.postMessage(ans);
