    //Requirements: Find the first element having a maximum frequency in a string “unacademy”

    let maxOccurenceFiinder = (str="")=>{
        str=str.toLowerCase()
        maxOccurence = { letter : null , occurence : null} 
        for(let i = 0 ; i < str.length ; i++){
            let counter = 1
            let letter = str[i]
            for(let j = i+1 ; j <str.length ; j++){
                if(str[j] == str[i]) counter++
            }
            if(maxOccurence.occurence < counter){
                maxOccurence.letter = letter
                maxOccurence.occurence = counter
            }
        }
        return maxOccurence
    }

    let str = `unaccademy${null}` 



    b = maxOccurenceFiinder(str)
    console.log(b)

//Time Complexity  : O(n^2)
//Space Complexity : O(1)
