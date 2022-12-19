// Selection Sort Recursievly

const selectionSort = (a = [],len = a.length)=>{
    //bsae case 
    if(len <= 1) return a

    //calculation
    let largest = len-1
    for(let i = 0 ; i < len ; i++){
        if(a[largest] < a[i])
            largest = i
    }
    [a[largest],a[len-1]] = [a[len-1],a[largest]]
    len--
    //recursive call
    return selectionSort(a,len)
}

a= [1,3,2,-1]

selectionSort(a)

console.log(a)