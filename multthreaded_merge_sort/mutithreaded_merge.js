const { Worker } = require('worker_threads');


let arr = [1,2,4,1,4,184,1,41,321,1,1,41,4,1]

console.log("Before Workers thread");

const worker = new Worker("./merge_sort.js", {
    workerData : {
        arr : arr
    }
})

worker.on("message", (data) => {
    console.log(data);
})

console.log("After Workers thread");

