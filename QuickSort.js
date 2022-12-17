//QuickSort

let arr = [2,1,3,2,1,5,4,6,7,7,5,32,2,-89]

function QuickSort(arr= [], len = arr.length){
    //base case
    if(arr.length <= 1) return arr

    //calculation                       // [2,1,3] >>> left = 1,2 
    let pivot = arr[len-1];
    let left = [];
    let right =  [];
    for(let i = len-2 ; i >= 0 ; i--)
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])

    //recursive call
    if(left.length == 0) return [pivot,...QuickSort(right)]
    else if(right.length == 0) return [...QuickSort(left),pivot]
    else return [...QuickSort(left),pivot,...QuickSort(right)]
}

arr = [...QuickSort(arr)]

console.log(arr)
