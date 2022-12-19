//Insertion Sort recursively

const insertionSort = (a = [], len = a.length,)=>{
    //base case
    if(len <= 1)
        return a

    //calculation
    for(let i = 0 ; i < len ; i++)
        if(a[i] > a[len-1])
            [a[i],a[len-1]] = [a[len-1],a[i]] 
    
    len--
    //recurssion
    return insertionSort(a,len)
}

a= [1,3,2,-1]

insertionSort(a)

console.log(a)