//BubbleSort

let a = [4,1,3,2] // 1 2 3 4

function BubbleSort(a=[],len = a.length-1){
    for(let i = 0 ; i < len-1 ; i++){
        for(let j = 0 ; j < len-1 ; j++){
            if(a[j]<a[j+1]){
                [a[j],a[j+1]]=[a[j+1],a[j]]
            }
        }
    } 
}

BubbleSort(a)
console.log(a)
