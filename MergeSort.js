//Merge Sort

a = [4,1,2,3,6,5,7]
//   0 1 2 3 4 5  

function mergeSort(a=[],len = a.length){
    //Base Case
    if(len <= 1) return a

    //Calculation
    let mid = (len % 2 == 0) ? (len/2) : ((len+1)/2)
    const leftArray  = a.slice(0,mid)
    const rightArray = a.slice(mid,len)
    
    //Recursive Call
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

//merge two sorted array

function merge(a1=[],a2=[]){
    let result = []
    for(let i = 0, j= 0 ; i < a1.length || j < a2.length;){
        if(a1[i]<a2[j]){
            result.push(a1[i])
            i < a1.length ? i++ : null
        }
        else{
            result.push(a2[j])
            j < a2.length ? j++ : null
        }
    }
    return result
}

mergeSort(a)

console.log(a)