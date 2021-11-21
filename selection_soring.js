const numbers = [32,3,-3,28,90]
function selectionSoring(array){
    for (let i = 0; i < array.length; i++) {
        let min = i ; 
        // console.log('min-', min)
        for (let j = i; j < array.length; j++) {
            // console.log('j-', j)
            if(array[min]>array[j]){
                [array[min], array[j]] = [array[j], array[min]]
            }
            
        }
    
    }
    return array
}
const result =  selectionSoring(numbers)
console.log(result)