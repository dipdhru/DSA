//Bubble Sort Recursively

const bubbleSort = (a = [], len = a.length, )=>{
    //base case
    if(len <= 1)
        return a

    //calculation
    for(let i = 0 ; i < len ; i++)
        if(a[i] > a[i+1])
            [a[i],a[i+1]] = [a[i+1],a[i]] 
    
    len--
    //recurssion
    return bubbleSort(a,len)
}

a= [1,3,2,-1]

bubbleSort(a)

console.log(a)