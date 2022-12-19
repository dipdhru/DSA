//Insertion sort

let a = [2,4,1,7,6,3,5,8,9]

function insertionSort(a=[]){
    for(let i = 0; i < a.length ; i++){
        for(let j = i+1 ; j < a.length; j++){
            if(a[i] > a[j]) [a[i],a[j]] = [a[j],a[i]]
        }
    }
}
insertionSort(a)
console.log(a)