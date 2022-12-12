//Selection Sort

a = [4,1,3,2]

function selectionSort(a=[]){
    for(let i = 0 ; i < a.length-1 ; i++){
        let smallest = i
        for(let j = i+1 ; j < a.length ; j++)
            smallest = a[smallest] < a[j] ? smallest : j

        if( i != smallest )
            [a[i],a[smallest]] =[a[smallest],a[i]] 
        
    }
}

selectionSort(a)
console.log(a)