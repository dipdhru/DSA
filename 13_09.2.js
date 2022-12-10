/*
Requirements: Write a program to rearrange the elements such like positive numbers shift to the end and negative numbers to the start.
*/

a = [1,4,-2,-5,-6,11,-7,1,-18,-9,0]
// [ -1 -3-2 0 3 4 ]
console.log(a)

function shifter(arr = []){
    for(let i = 0 , j = arr.length-1 ; i < j && (i < arr.length && j >= 0) ; ){
        let flag = true
        if(arr[i] > 0){
            if(arr[j] < 0){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }j--
            flag = false
        } 
        if(flag)i++
    }
    //return arr
}

shifter(a)
console.log(a)
